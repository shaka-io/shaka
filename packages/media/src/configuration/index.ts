import fs from "fs";
import path from "path";
import { TypesMediaConfiguration } from "./types";

const rootdir = path.join(__dirname, `..`, `..`);
const RESOURCE_DIRECTORY = path.join(rootdir, `resources`);
console.log(RESOURCE_DIRECTORY, `RESOURCE_DIRECTORY`);

if (!fs.existsSync(RESOURCE_DIRECTORY)) {
  throw new Error(`[shaka-media] Error. No resources directory.`);
}

export const configuration: TypesMediaConfiguration = {
  RESOURCE_DIRECTORY,
};
