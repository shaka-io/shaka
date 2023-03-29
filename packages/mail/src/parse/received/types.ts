/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmailRecords } from "@shaka-js/models/lib/email/EmailRecords";

export type FiguresMailParseReceived = {
  body: any;
};

export type ResolveMailParseReceived = {
  records: EmailRecords;
};
