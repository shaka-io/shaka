/* eslint-disable @typescript-eslint/no-explicit-any */

export const fetcher = async (uri: string): Promise<any> => {
  try {
    const res = await fetch(uri);
    return res.json();
  } catch (e) {
    return undefined;
  }
};
