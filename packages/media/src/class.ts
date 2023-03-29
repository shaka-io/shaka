import { env } from "@shaka-js/env";
import ModelsConnection from "@shaka-js/models";
import { server } from "./server";
import { envmedia } from "./_env";

const { ENV } = env;
const { MEDIA_PORT } = envmedia;

export class ShakaMedia {
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
      console.log(`[shaka-media] Started.`);

      const httpserver = await server(this.models);
      if (!httpserver) {
        msg = `[shaka-media] Error. Http Server instance is undefined.`;
        throw new Error(msg);
      }

      httpserver.listen(MEDIA_PORT, (): void => {
        console.log(`[shaka-media] (env) ${process.env.NODE_ENV || "no env"}`);
        console.log(`[shaka-media] (port) ${MEDIA_PORT}`);
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
        console.log(`[shaka-media] (catch) ${message}`);
        console.log(e);
      }
    }
  }
}
