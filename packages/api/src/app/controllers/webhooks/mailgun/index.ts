import { LibraryAttestStrings } from "@shaka-js/library/lib/attest/strings/LibraryAttestStrings";
import { MailParseReceived } from "@shaka-js/mail/lib/parse/received";
import { MailValidateSignature } from "@shaka-js/mail/lib/validate/signature";
import ModelsConnection from "@shaka-js/models";
import { Email } from "@shaka-js/models/lib/email/Email";
import { Request, Response } from "express";

export const webhooksmailgun = async (
  req: Request,
  res: Response,
  models: typeof ModelsConnection
): Promise<void> => {
  let EMAIL_PK: number | undefined;

  try {
    const { body } = req;
    const validated = MailValidateSignature({ body });
    if (!validated) {
      throw new Error(`[shaka-api] Error. Webhooks Mailgun. Signature`);
    }
    const { records } = MailParseReceived({ body });
    const addressmatch = records.from.match(/<(.*?)>/);
    const address = LibraryAttestStrings(addressmatch?.[1] || ``);

    const emailwrite = await models
      .createQueryBuilder()
      .insert()
      .into(Email)
      .values({
        address,
        to: records.recipient,
        records,
      })
      .returning([`id`])
      .execute();

    if (
      emailwrite &&
      emailwrite.raw[0].id &&
      !Number.isNaN(emailwrite.raw[0].id)
    ) {
      EMAIL_PK = Number(emailwrite.raw[0].id);
    }

    res.status(200).send();
  } catch (e) {
    if (EMAIL_PK) {
      // @ todo add conditional remove database entry
      console.log(`(dev) - remove email pk: ${EMAIL_PK}`);
    }
    res.status(400).send();
  }
};
