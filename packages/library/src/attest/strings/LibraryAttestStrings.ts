/* eslint-disable @typescript-eslint/no-explicit-any */
export const LibraryAttestStrings = (a: any): string => {
  if (!!a && typeof a === "string") {
    return String(a);
  }
  const msg = `[shaka] LibraryAttestStrings: ${String(a)}`;
  throw new Error(msg);
};
