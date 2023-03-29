import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import { configuration } from "../configuration";
import { envmedia } from "../_env";
import { router } from "./router";

const { MEDIA_CORS_ORIGIN } = envmedia;
const { RESOURCE_DIRECTORY } = configuration;

const app: Application = express();
app.use(helmet());

const corsOptions: CorsOptions = {
  origin: MEDIA_CORS_ORIGIN,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(RESOURCE_DIRECTORY));
app.use(router);

export { app };
