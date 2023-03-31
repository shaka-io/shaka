import { LibraryRegExpEmail } from "@shaka-js/library/lib/regexp/email";
import formData from "form-data";
import Mailgun from "mailgun.js";
import Client from "mailgun.js/client";
import { MailgunMessageData } from "mailgun.js/interfaces/Messages";
import { envmail } from "../_env";

const { MAIL_BASE, MAIL_KEY } = envmail;

export type FiguresMailClassSendMessage = {
  to: string;
  frompref: string;
  subject: string;
  text: string;
};

export type ResolveMailClassSendMessage = "email-re" | "catch";

export class MailClass {
  private mailc: Client;

  constructor(eu?: boolean) {
    const mg = new Mailgun(formData);
    const client = mg.client({
      username: "api",
      key: MAIL_KEY,
      url: `https://api${eu ? `.eu` : ``}.mailgun.net`,
    });

    this.mailc = client;
  }

  public async send({
    to,
    frompref,
    subject,
    text,
  }: FiguresMailClassSendMessage): Promise<
    ResolveMailClassSendMessage | undefined
  > {
    try {
      if (!LibraryRegExpEmail.test(to)) {
        return `email-re`;
      }

      const replypref = frompref;

      const message: MailgunMessageData = {
        to,
        from: `Shaka <${frompref}@${MAIL_BASE}>`,
        text,
        html: ``,
        subject,
        "h:Reply-To": `${replypref}@${MAIL_BASE}`,
      };

      console.log(message, `message`);
      const sendmail = await this.mailc.messages.create(MAIL_BASE, message);
      console.log(JSON.stringify(sendmail, null, 4), `sendmail`); // @todo dev rm
      return undefined;
    } catch (e) {
      console.log(e, `(dev) - catch`);
      return `catch`;
    }
  }
}
