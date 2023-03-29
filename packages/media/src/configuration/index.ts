import fs from "fs";
import path from "path";
import { TypesMediaConfiguration } from "./types";

const rootdir = path.join(__dirname, `..`, `..`, `src`);
const RESOURCE_DIRECTORY = path.join(rootdir, `_resources`);

if (!fs.existsSync(RESOURCE_DIRECTORY)) {
  throw new Error(`[shaka-media] Error. No resources directory.`);
}

export const configuration: TypesMediaConfiguration = {
  RESOURCE_DIRECTORY,
};
