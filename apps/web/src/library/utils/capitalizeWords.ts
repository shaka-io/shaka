import { capitalizeFirst } from "@shaka-web-library/utils/capitalizeFirst";

export const capitalizeWords = (l: string): string => {
  const ws = l
    .split(" ")
    .map((i) => capitalizeFirst(i))
    .join(" ");

  return ws;
};
