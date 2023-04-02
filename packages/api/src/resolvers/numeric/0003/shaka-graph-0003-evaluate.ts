import { LnCrowdfund } from "@shaka-js/models/lib/ln-crowdfund/LnCrowdfund";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphData0003 } from "./shaka-graph-0003-data";
import { ShakaGraphFigures0003 } from "./shaka-graph-0003-figure";
import { ShakaGraphResolve0003 } from "./shaka-graph-0003-resolve";

export const ShakaGraphEvaluate0003 = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFigures0003
): Promise<ShakaGraphResolve0003> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    //
    //
    // evaluate 0003
    //

    const list = await ctx.models
      .getRepository(LnCrowdfund)
      .createQueryBuilder(`lncrowdfund`)
      .getMany();

    message = `complete`;

    //
    //
    // data 0003
    //
    const data: ShakaGraphData0003 = {
      notes: [`0003`, figure.locale],
      list,
    };

    return handler.solve<{ data: ShakaGraphData0003 }>({ data });
  } catch (ShakaGraphEvaluate0003Error) {
    return handler.error<string>(message);
  }
};
