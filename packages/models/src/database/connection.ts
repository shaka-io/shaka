import { env } from "@shaka-js/env";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { envmodels } from "../_env";
import { Email } from "../email/Email";
import { LnCrowdfund } from "../ln-crowdfund/LnCrowdfund";
import { Question } from "../question/Question";
import { Team } from "../team/Team";
import { Shaka1681194680071 } from "./migrations/1681194680071-Shaka";

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
  entities: [Email, Question, LnCrowdfund, Team],
  subscribers: [],
  migrationsTableName: "history",
  migrationsRun: true,
  migrations: [Shaka1681194680071],
  seeds: [],
};

export const ModelsConnection = new DataSource(options);
