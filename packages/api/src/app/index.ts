import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import { envapi } from "../_env";
import { router } from "./router";

const { API_CORS_ORIGIN } = envapi;

const app: Application = express();

const corsOptions: CorsOptions = {
  origin: API_CORS_ORIGIN,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

export { app };
