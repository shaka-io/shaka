import { TypesLibraryEnv } from "./types";

let msg: string | undefined;

// eslint-disable-next-line prefer-destructuring
const LIBRARY_HASH_IV = process.env.LIBRARY_HASH_IV;
if (!LIBRARY_HASH_IV) {
  msg = `process.env.LIBRARY_HASH_IV`;
  throw new Error(msg);
}

export const envlibrary: TypesLibraryEnv = {
  LIBRARY_HASH_IV,
};
