import * as jshashes from "jshashes";
import { envlibrary } from "../../_env";

const { LIBRARY_HASH_IV } = envlibrary;

export const LibraryHashHmac = (l: string): string => {
  const hasher = new jshashes.SHA256();
  const hash = hasher.b64_hmac(LIBRARY_HASH_IV, l);
  return String(hash);
};
