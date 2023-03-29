import { TypeEnvRoot } from "./types";

export const env: TypeEnvRoot = {
  PROD: process.env.NODE_ENV === `production`,
  ENV: process.env.NODE_ENV || `shaka`,
};
