#!/usr/bin/env node

import fs from "fs";
import glob from "glob";
import path from "path";
import { getArgv } from "../../util/getArgv";
import { getArgvOpt } from "../../util/getArgvOpt";

const argFolder = getArgv();
const argFind = getArgv(3);
const argReplace = getArgv(4);
const extratypes = getArgvOpt(5);

const main = (find: string, replace: string) => {
  let msg = `[files-rename]`;

  const globpath = path.join(
    process.cwd(),
    argFolder,
    "**",
    `*.{ts,tsx,json,graphql,md${extratypes || ``}}`
  );
  const files = glob.sync(globpath);
  if (!files || !files.length) {
    msg += ` !files`;
    throw new Error(msg);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files.map((filepath: any) => {
    const fne = filepath.split("/").pop();
    const fpf = filepath.split("/").slice(0, -1).join("/");

    if (!fne || fpf === "index.ts") {
      return;
    }

    if (fne.includes(find)) {
      const fn1 = fne.replace(find, replace);
      const fp1 = path.join(fpf, fn1);
      fs.renameSync(filepath, fp1);
    }
    return;
  });
};

main(argFind, argReplace);
