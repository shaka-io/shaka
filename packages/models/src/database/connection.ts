import { env } from "@shaka-js/env";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { Email } from "../email/Email";
import { LnCrowdfund } from "../ln-crowdfund/LnCrowdfund";
import { Question } from "../question/Question";
import { envmodels } from "../_env";
import { Shaka1680109864603 } from "./migrations/1680109864603-Shaka";
import { Shaka1680116671524 } from "./migrations/1680116671524-Shaka";
import { Shaka1680304799523 } from "./migrations/1680304799523-Shaka";
import { Shaka1680305040854 } from "./migrations/1680305040854-Shaka";

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
  entities: [Email, Question, LnCrowdfund],
  subscribers: [],
  migrationsTableName: "history",
  migrationsRun: true,
  migrations: [
    Shaka1680109864603,
    Shaka1680116671524,
    Shaka1680304799523,
    Shaka1680305040854,
  ],
  seeds: [],
};

export const ModelsConnection = new DataSource(options);
