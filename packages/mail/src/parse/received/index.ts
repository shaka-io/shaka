import { LibraryAttestStrings } from "@shaka-js/library/lib/attest/strings/LibraryAttestStrings";
import { EmailRecords } from "@shaka-js/models/lib/email/EmailRecords";
import { FiguresMailParseReceived, ResolveMailParseReceived } from "./types";

export const MailParseReceived = ({
  body,
}: FiguresMailParseReceived): ResolveMailParseReceived => {
  const messageid = LibraryAttestStrings(body["Message-Id"]);
  const recipient = LibraryAttestStrings(body.recipient);
  const sender = LibraryAttestStrings(body.sender);
  const subject = LibraryAttestStrings(body.subject);
  const date = LibraryAttestStrings(body.Date);
  const from = LibraryAttestStrings(body.From);
  const text = LibraryAttestStrings(body["stripped-text"]);

  const records: EmailRecords = {
    messageid,
    recipient,
    sender,
    subject,
    date,
    from,
    text,
  };

  return {
    records,
  };
};
