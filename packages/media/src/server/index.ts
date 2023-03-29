import { env } from "@shaka-js/env";
import ModelsConnection from "@shaka-js/models";
import http, { Server } from "http";
import { app } from "../app";

const { ENV } = env;

export const server = async (
  models: typeof ModelsConnection
): Promise<Server | undefined> => {
  try {
    await models
      .initialize()
      .then(() =>
        console.log(`[shaka-media] (models) Connection established.`)
      );

    const httpServer = http.createServer(app);
    return httpServer;
  } catch (e) {
    if (ENV === "dev") {
      console.log(`[shaka-media] (catch) Error.`);
      console.log(e);
    }
    return undefined;
  }
};
