export const getArgvOpt = (i?: number): string | undefined => {
  const find = process.argv[i || 2];
  if (!find || typeof find !== "string") {
    return undefined;
  }
  return find;
};
