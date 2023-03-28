import axios, { AxiosInstance } from "axios";
import https from "https";
import { envvoltage } from "../_env";

const { VOLTAGE_BASE_URL, VOLTAGE_MACAROON } = envvoltage;

export const VoltageClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: VOLTAGE_BASE_URL,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers: { "Grpc-Metadata-macaroon": VOLTAGE_MACAROON },
  });
  return client;
};
