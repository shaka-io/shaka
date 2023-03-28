import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { env } from "@shaka-js/env";
import ModelsConnection from "@shaka-js/models";
import { json } from "body-parser";
import connectRedis from "connect-redis";
import session from "express-session";
import http, { Server } from "http";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import "websocket-polyfill";
import { app } from "../app";
import { ClassesApi } from "../classes";
import { ShakaGraphLnInfo } from "../resolvers/ln/info/shaka-graph-ln-info-resolver";
import { ShakaGraph0000 } from "../resolvers/numeric/0000/shaka-graph-0000-resolver";
import { envapi } from "../_env";
import { TypesServerContext } from "./types";

const { PROD, ENV } = env;
const { API_COOKIE_NAME, API_COOKIE_IV, API_REDIS_PORT } = envapi;

export const server = async (
  models: typeof ModelsConnection
): Promise<Server | undefined> => {
  try {
    await models
      .initialize()
      .then(() => console.log(`[shaka-api] (models) Connection established.`));

    const httpServer = http.createServer(app);

    const schema = await buildSchema({
      resolvers: [ShakaGraph0000, ShakaGraphLnInfo],
      scalarsMap: [],
      validate: false,
      globalMiddlewares: [],
    });

    const apollo = new ApolloServer<TypesServerContext>({
      schema,
      // cache: "bounded",
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await apollo.start();

    const RedisStore = connectRedis(session);
    const redis = new Redis(API_REDIS_PORT);

    app.use(
      session({
        name: API_COOKIE_NAME,
        secret: API_COOKIE_IV,
        saveUninitialized: false,
        resave: false,
        proxy: PROD,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
          httpOnly: !PROD,
          sameSite: !PROD,
          secure: PROD,
          domain: PROD ? `https://api.shaka.website` : undefined,
        },

        store: new RedisStore({
          client: redis,
          disableTouch: true,
        }),
      })
    );

    const classes = new ClassesApi();

    app.use(
      `/graph`,
      // cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(apollo, {
        context: async ({ req, res }) => {
          // eslint-disable-next-line no-promise-executor-return
          await new Promise((resolve) => setTimeout(resolve, 1000)); // simulates io latency

          const ctx: TypesServerContext = {
            req,
            res,
            models,
            redis,
            classes,
          };
          return ctx;
        },
      })
    );

    return httpServer;
  } catch (e) {
    if (ENV === "dev") {
      console.log(`[shaka-api] (catch) Error.`);
      console.log(e);
    }
    return undefined;
  }
};
