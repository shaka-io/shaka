import { VoltageInvoiceConfirm } from "@shaka-js/voltage/lib/invoice-confirm/";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataLnInvoiceConfirm } from "./shaka-graph-ln-invoice-confirm-data";
import { ShakaGraphFiguresLnInvoiceConfirm } from "./shaka-graph-ln-invoice-confirm-figure";
import { ShakaGraphResolveLnInvoiceConfirm } from "./shaka-graph-ln-invoice-confirm-resolve";

export const ShakaGraphEvaluateLnInvoiceConfirm = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresLnInvoiceConfirm
): Promise<ShakaGraphResolveLnInvoiceConfirm> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    //
    //
    // evaluate LnInvoiceConfirm
    //

    const { hash: HASH_0 } = figure;
    if (!HASH_0) {
      message = `~hash`;
      return handler.error(message);
    }

    const invoiceconfirm = await VoltageInvoiceConfirm({
      hash: HASH_0,
    });

    if (!invoiceconfirm) {
      message = `~invoice-confirm`;
      return handler.error(message);
    }

    const { settled } = invoiceconfirm;

    message = `complete`;

    //
    //
    // data LnInvoiceConfirm
    //
    const data: ShakaGraphDataLnInvoiceConfirm = {
      notes: [`LnInvoiceConfirm`],
      settled,
    };

    return handler.solve<{ data: ShakaGraphDataLnInvoiceConfirm }>({ data });
  } catch (ShakaGraphEvaluateLnInvoiceConfirmError) {
    return handler.error<string>(message);
  }
};
