import fs from "fs";
import path from "path";
import { TypesMediaConfiguration } from "./types";

const rootdir = path.join(__dirname, `..`, `..`);
const RESOURCE_DIRECTORY = path.join(rootdir, `resources`);
if (!fs.existsSync(RESOURCE_DIRECTORY)) {
  fs.mkdirSync(RESOURCE_DIRECTORY, { recursive: true });
}

export const configuration: TypesMediaConfiguration = {
  RESOURCE_DIRECTORY,
};
