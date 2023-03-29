#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { getArgv } from "../../util/getArgv";

const argenv = getArgv().toLowerCase();

const main = () => {
  let msg = `[ci-env-example]`;

  if (![`models`, `api`].includes(argenv)) {
    msg += ` - specified unknown environment`;
    throw new Error(msg);
  }

  let ws = ``;
  ws += `# shaka environment\n`;

  if (argenv === "models") {
    ws += `
MODELS_DB=
`;
  }

  if (argenv === "api") {
    ws += `
API_PORT=
API_CORS_ORIGIN=
API_REDIS_PORT=
API_COOKIE_NAME=
API_COOKIE_IV=
API_TOK_IV=
API_HASH_IV=
API_ENC_IV=

MAIL_BASE=
MAIL_KEY=
MAIL_SIGN=

LIBRARY_HASH_IV=

VOLTAGE_BASE_URL=

MODELS_DB=
`;
  }

  const dirb = path.join(process.cwd());
  const dirw = path.join(dirb, `.env.${argenv}`);
  fs.writeFileSync(dirw, ws);
};

main();
