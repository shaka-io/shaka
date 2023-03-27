import { v4 } from "uuid";

export const LibraryUniques = (): string => {
  const s = v4();
  return s;
};
