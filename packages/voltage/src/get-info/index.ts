import { VoltageClient } from "../client";
import { ResolveVoltageGetInfo } from "./types";

export const VoltageGetInfo = async (): Promise<ResolveVoltageGetInfo> => {
  try {
    const volc = VoltageClient();
    const { data } = await volc.get("/v1/getinfo");
    if (data && data.version) {
      const { version } = data;
      return {
        version,
      };
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
};
