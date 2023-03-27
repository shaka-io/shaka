import * as jshashes from "jshashes";

export const LibraryHash = (l: string): string => {
  const hasher = new jshashes.SHA256();
  const hash = hasher.b64(l);
  return String(hash);
};
