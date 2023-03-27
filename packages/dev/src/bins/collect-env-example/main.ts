#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { getArgv } from "../../util/getArgv";

const argenv = getArgv().toLowerCase();

const main = () => {
  let msg = `[ci-env-example]`;

  if (!["models"].includes(argenv)) {
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

  const dirb = path.join(process.cwd());
  const dirw = path.join(dirb, `.env.${argenv}`);
  fs.writeFileSync(dirw, ws);
};

main();
