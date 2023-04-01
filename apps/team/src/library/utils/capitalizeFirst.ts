export const capitalizeFirst = (l: string): string => {
  const ws = `${l.charAt(0).toUpperCase()}${l.slice(1)}`;
  return ws;
};
