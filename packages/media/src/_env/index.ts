import * as dotenv from "dotenv-safe";
import path from "path";
import { EnvMediaType } from "./types";

dotenv.config({
  allowEmptyValues: false,
  example: path.join(__dirname, `..`, `..`, `.env.media`),
});

let msg: string | undefined;

const { MEDIA_PORT } = process.env;
if (!MEDIA_PORT) {
  msg = `process.env.MEDIA_PORT`;
  throw new Error(msg);
}

const { MEDIA_CORS_ORIGIN } = process.env;
if (!MEDIA_CORS_ORIGIN) {
  msg = `process.env.MEDIA_CORS_ORIGIN`;
  throw new Error(msg);
}

export const envmedia: EnvMediaType = {
  MEDIA_PORT,
  MEDIA_CORS_ORIGIN,
};
