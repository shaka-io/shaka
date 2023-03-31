import { VoltageClient } from "../client";
import {
  FiguresVoltageInvoiceConfirm,
  ResolveVoltageInvoiceConfirm,
} from "./types";

export const VoltageInvoiceConfirm = async ({
  hash,
}: FiguresVoltageInvoiceConfirm): Promise<ResolveVoltageInvoiceConfirm> => {
  try {
    const volc = VoltageClient();
    const hashb = Buffer.from(hash, "base64");
    const hashh = hashb.toString("hex");

    const { data } = await volc.get(`/v1/invoice/${hashh}`);

    if (data) {
      const { settled } = data;
      if (typeof settled === `boolean`) {
        return {
          settled,
        };
      }
    }

    return undefined;
  } catch (e) {
    console.log(e, `e`); // @todo dev rm
    return undefined;
  }
};
