export const getArgv = (i?: number): string => {
  const find = process.argv[i || 2];
  if (!find || typeof find !== "string") {
    const message = `Not a valid "find" declaration in argv[${i}]. Received: "${find}".`;
    throw new Error(message);
  }
  return find;
};
