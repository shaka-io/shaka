import { VoltageInvoiceCreate } from "@shaka-js/voltage/lib/invoice-create/";
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

  try {
    //
    //
    // evaluate LnInvoiceCreate
    //

    const { satoshis: SATOSHIS_0 } = figure;
    if (!SATOSHIS_0 || Number.isNaN(SATOSHIS_0.trim())) {
      message = `~satoshis`;
      return handler.error(message);
    }

    const SATOSHIS_ROUNDED = Math.floor(Number(SATOSHIS_0.trim())).toFixed(0);

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
