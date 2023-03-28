export type FiguresVoltageInvoiceCreate = {
  satoshis: number;
};

export type ResolveVoltageInvoiceCreate =
  | {
      hash: string;
      ln: string;
    }
  | undefined;
