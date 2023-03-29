import { env } from "@shaka-js/env";
import { TypesConfiguration } from "./types";

const { PROD } = env;

const graphpath = "/";

export const configgraph: TypesConfiguration = {
  SERVER: {
    API_PATH: graphpath,
    UNSECURED_ROUTES: ["/", "/health", PROD ? "" : graphpath].filter(
      (r) => !!r
    ),
  },
};
