import { LibraryAttestStrings } from "@shaka-js/library/lib/attest/strings/LibraryAttestStrings";
import { createHmac } from "crypto";
import { envmail } from "../../_env";
import { FiguresMailValidateSignature } from "./types";

const { MAIL_SIGN } = envmail;

export const MailValidateSignature = ({
  body,
}: FiguresMailValidateSignature): boolean => {
  const timestamp = LibraryAttestStrings(body.timestamp);
  const token = LibraryAttestStrings(body.token);
  const signature = LibraryAttestStrings(body.signature);

  const hash = createHmac("sha256", MAIL_SIGN)
    .update(`${timestamp}${token}`)
    .digest("hex");
  return hash === signature;
};
