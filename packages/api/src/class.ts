import { env } from "@shaka-js/env";
import ModelsConnection from "@shaka-js/models";
import { server } from "./server";
import { envapi } from "./_env";

const { ENV } = env;
const { API_PORT } = envapi;

export class ShakaApi {
  private models: typeof ModelsConnection;

  constructor() {
    this.models = ModelsConnection;
  }

  public get connection(): typeof this.models {
    return this.models;
  }

  public async start() {
    let msg = ``;
    try {
      console.log(`[shaka-api] Started.`);

      const httpserver = await server(this.models);

      if (!httpserver) {
        msg = `[shaka-api] Error. Http Server instance is undefined.`;
        throw new Error(msg);
      }

      httpserver.listen(API_PORT, (): void => {
        console.log(`[shaka-api] (env) ${process.env.NODE_ENV || "no env"}`);
        console.log(`[shaka-api] (port) ${API_PORT}`);
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e, `e`);
      let message = "catch";
      let e0: string | undefined;
      let e1: string | undefined;

      const { code, syscall } = e;
      if (code && syscall) {
        e0 = code;
        e1 = syscall;
      } else if (e instanceof Error) {
        e0 = e.name;
        e1 = e.message;
      }

      if (e0 === "ENOTFOUND" && e1 === "getaddrinfo") {
        message = `network-address-not-found`;
      }

      if (ENV === "dev") {
        console.log(`[shaka-api] (catch) Error. ${message}`);
        console.log(e);
      }
    }
  }
}
