import { TypesMailEnv } from "./types";

let msg: string | undefined;

const { MAIL_BASE } = process.env;
if (!MAIL_BASE) {
  msg = `process.env.MAIL_BASE`;
  throw new Error(msg);
}

const { MAIL_KEY } = process.env;
if (!MAIL_KEY) {
  msg = `process.env.MAIL_KEY`;
  throw new Error(msg);
}

const { MAIL_SIGN } = process.env;
if (!MAIL_SIGN) {
  msg = `process.env.MAIL_SIGN`;
  throw new Error(msg);
}
export const envmail: TypesMailEnv = {
  MAIL_BASE,
  MAIL_KEY,
  MAIL_SIGN,
};
