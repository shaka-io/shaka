/* eslint-disable prefer-destructuring */

import { TypesEnvWebTeam } from "_env/types";

let msg: string | undefined;

const GRAPH_URI = process.env.GRAPH_URI;
if (!GRAPH_URI) {
  msg = `process.env.GRAPH_URI`;
  throw new Error(msg);
}

export const envwebs: TypesEnvWebTeam = {
  GRAPH_URI,
};
