import { VoltageGetInfo } from "@shaka/voltage/lib/get-info/";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataLnInfo } from "./shaka-graph-ln-info-data";
import { ShakaGraphFiguresLnInfo } from "./shaka-graph-ln-info-figure";
import { ShakaGraphResolveLnInfo } from "./shaka-graph-ln-info-resolve";

export const ShakaGraphEvaluateLnInfo = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresLnInfo
): Promise<ShakaGraphResolveLnInfo> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    //
    //
    // evaluate LnInfo
    //

    console.log(!!ctx, figure); // dev logging

    const info = await VoltageGetInfo();

    if (!info) {
      message = `!-info`;
      return handler.error<string>(message);
    }

    const { version } = info;

    message = `complete`;

    //
    //
    // data LnInfo
    //
    const data: ShakaGraphDataLnInfo = {
      notes: [`LnInfo`],
      version,
    };

    return handler.solve<{ data: ShakaGraphDataLnInfo }>({ data });
  } catch (ShakaGraphEvaluateLnInfoError) {
    return handler.error<string>(message);
  }
};
