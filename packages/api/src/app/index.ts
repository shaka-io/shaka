import cors, { CorsOptions } from "cors";
import express, { Application, Router } from "express";
import { envapi } from "../_env";

const { API_CORS_ORIGIN } = envapi;

export const appmethod = (router: Router): Application => {
  const app: Application = express();

  const corsOptions: CorsOptions = {
    origin: API_CORS_ORIGIN.split(`,`),
    credentials: true,
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);
  return app;
};
