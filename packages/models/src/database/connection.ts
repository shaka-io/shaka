import { env } from "@shaka-js/env";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { Question } from "../question/Question";
import { envmodels } from "../_env";

const { PROD, ENV } = env;
const { MODELS_DB } = envmodels;

const options: DataSourceOptions & SeederOptions = {
  ssl: PROD ? true : ENV.toLowerCase().slice(-`_local`.length) !== `_local`,
  name: "default",
  type: "postgres",
  url: MODELS_DB,
  synchronize: false,
  logging: !PROD,
  dropSchema: false,
  entities: [Question],
  subscribers: [],
  migrationsTableName: "history",
  migrationsRun: true,
  migrations: [],
  seeds: [],
};

export const ModelsConnection = new DataSource(options);
