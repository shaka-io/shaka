import { VoltageInvoiceCreate } from "@shaka-js/voltage/lib/invoice-create/";
import axios from "axios";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataLnInvoiceCreate } from "./shaka-graph-ln-invoice-create-data";
import { ShakaGraphFiguresLnInvoiceCreate } from "./shaka-graph-ln-invoice-create-figure";
import { ShakaGraphResolveLnInvoiceCreate } from "./shaka-graph-ln-invoice-create-resolve";

export const ShakaGraphEvaluateLnInvoiceCreate = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresLnInvoiceCreate
): Promise<ShakaGraphResolveLnInvoiceCreate> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  let FLAG_DOLLARS = false;
  let SATOSHIS_ABSOLUTE: number | undefined;
  let DOLLARS_ABSOLUTE: number | undefined;

  try {
    //
    //
    // evaluate LnInvoiceCreate
    //

    const { satoshis: SATOSHIS_0 } = figure;
    if (!SATOSHIS_0) {
      message = `~satoshis`;
      return handler.error(message);
    }

    if (SATOSHIS_0[0] === `$`) {
      //
      //
      // figure representing dollar amount
      //
      FLAG_DOLLARS = true;
      const SATOSHIS_ABSOLUTE_STR = SATOSHIS_0.trim().slice(1);
      if (Number.isNaN(SATOSHIS_ABSOLUTE_STR)) {
        message = `~satoshis-dollars-number`;
        return handler.error(message);
      }

      DOLLARS_ABSOLUTE = Number(SATOSHIS_ABSOLUTE_STR);
    } else {
      //
      //
      // figure representing satoshi amount
      //
      const SATOSHIS_ABSOLUTE_STR = SATOSHIS_0.trim();
      if (Number.isNaN(SATOSHIS_ABSOLUTE_STR)) {
        message = `~satoshis-number`;
        return handler.error(message);
      }
      SATOSHIS_ABSOLUTE = Number(SATOSHIS_ABSOLUTE_STR);
    }

    if (FLAG_DOLLARS && DOLLARS_ABSOLUTE) {
      const coinapi = axios.create({
        baseURL: "https://rest.coinapi.io",
        timeout: 1000,
        headers: { "X-CoinAPI-Key": `${process.env.COINAPI_KEY}` },
      });

      const response = await coinapi.get("/v1/exchangerate/BTC/USD");
      if (
        response.data &&
        response.data.rate &&
        !Number.isNaN(response.data.rate)
      ) {
        SATOSHIS_ABSOLUTE =
          (1 / Number(response.data.rate)) * DOLLARS_ABSOLUTE * 100000000;
      }
    }

    if (!SATOSHIS_ABSOLUTE) {
      message = `~satoshis-absolute`;
      return handler.error(message);
    }

    //

    const SATOSHIS_ROUNDED = Math.floor(SATOSHIS_ABSOLUTE);

    const invoicecreate = await VoltageInvoiceCreate({
      satoshis: Number(SATOSHIS_ROUNDED),
    });

    if (!invoicecreate) {
      message = `~invoice`;
      return handler.error(message);
    }

    const { hash, ln } = invoicecreate;

    message = `complete`;

    //
    //
    // data LnInvoiceCreate
    //
    const data: ShakaGraphDataLnInvoiceCreate = {
      notes: [`LnInvoiceCreate`],
      hash,
      ln,
    };

    return handler.solve<{ data: ShakaGraphDataLnInvoiceCreate }>({ data });
  } catch (ShakaGraphEvaluateLnInvoiceCreateError) {
    return handler.error<string>(message);
  }
};
