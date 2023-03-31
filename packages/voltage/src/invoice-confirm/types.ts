export type FiguresVoltageInvoiceConfirm = {
  hash: string;
};

export type ResolveVoltageInvoiceConfirm =
  | {
      settled: boolean;
    }
  | undefined;
