// shaka
import * as dotenv from "dotenv-safe";
import path from "path";
import { EnvApiType } from "./types";

dotenv.config({
  allowEmptyValues: false,
  example: path.join(__dirname, `..`, `..`, `.env.api`),
});

let msg: string | undefined;

const { API_PORT } = process.env;
if (!API_PORT) {
  msg = `process.env.API_PORT`;
  throw new Error(msg);
}

const { API_CORS_ORIGIN } = process.env;
if (!API_CORS_ORIGIN) {
  msg = `process.env.API_CORS_ORIGIN`;
  throw new Error(msg);
}

const { API_TOK_IV } = process.env;
if (!API_TOK_IV) {
  msg = `process.env.API_TOK_IV`;
  throw new Error(msg);
}

const { API_HASH_IV } = process.env;
if (!API_HASH_IV) {
  msg = `process.env.API_HASH_IV`;
  throw new Error(msg);
}

const { API_ENC_IV } = process.env;
if (!API_ENC_IV) {
  msg = `process.env.API_ENC_IV`;
  throw new Error(msg);
}

const { API_COOKIE_IV } = process.env;
if (!API_COOKIE_IV) {
  msg = `process.env.API_COOKIE_IV`;
  throw new Error(msg);
}

const { API_COOKIE_NAME } = process.env;
if (!API_COOKIE_NAME) {
  msg = `process.env.API_COOKIE_NAME`;
  throw new Error(msg);
}

const { API_REDIS_PORT } = process.env;
if (!API_REDIS_PORT) {
  msg = `process.env.API_REDIS_PORT`;
  throw new Error(msg);
}

export const envapi: EnvApiType = {
  API_PORT,
  API_CORS_ORIGIN,
  API_REDIS_PORT,
  API_TOK_IV,
  API_HASH_IV,
  API_ENC_IV,
  API_COOKIE_NAME,
  API_COOKIE_IV,
};
