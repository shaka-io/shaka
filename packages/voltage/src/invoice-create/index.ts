import { VoltageClient } from "../client";
import {
  FiguresVoltageInvoiceCreate,
  ResolveVoltageInvoiceCreate,
} from "./types";

export const VoltageInvoiceCreate = async ({
  satoshis,
}: FiguresVoltageInvoiceCreate): Promise<ResolveVoltageInvoiceCreate> => {
  try {
    const volc = VoltageClient();
    const { data } = await volc.post("/v1/invoices", {
      value: satoshis,
    });

    if (data && data.r_hash && data.payment_request) {
      const { r_hash: hash, payment_request: ln } = data;
      return {
        hash,
        ln,
      };
    }

    return undefined;
  } catch (e) {
    console.log(e, `error`); // @todo rm debugging
    return undefined;
  }
};
