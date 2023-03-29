// shaka
import fs from "fs";
import path from "path";
import { TypesVoltageEnv } from "./types";

let msg: string | undefined;

const { VOLTAGE_BASE_URL } = process.env;
if (!VOLTAGE_BASE_URL) {
  msg = `process.env.VOLTAGE_BASE_URL`;
  throw new Error(msg);
}

let VOLTAGE_MACAROON = ``;

const rdir = path.join(process.cwd(), `admin.macaroon`);
if (!fs.existsSync(rdir)) {
  msg = `VOLTAGE_MACAROON directory does not exist`;
  throw new Error(msg);
}
VOLTAGE_MACAROON = fs.readFileSync(rdir).toString(`hex`);
if (!VOLTAGE_MACAROON) {
  msg = `process.env.VOLTAGE_MACAROON`;
  throw new Error(msg);
}

export const envvoltage: TypesVoltageEnv = {
  VOLTAGE_BASE_URL,
  VOLTAGE_MACAROON,
};
