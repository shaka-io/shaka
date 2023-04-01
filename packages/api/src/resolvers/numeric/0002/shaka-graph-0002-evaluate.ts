import { LnCrowdfund } from "@shaka-js/models/lib/ln-crowdfund/LnCrowdfund";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphData0002 } from "./shaka-graph-0002-data";
import { ShakaGraphFigures0002 } from "./shaka-graph-0002-figure";
import { ShakaGraphResolve0002 } from "./shaka-graph-0002-resolve";

export const ShakaGraphEvaluate0002 = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFigures0002
): Promise<ShakaGraphResolve0002> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;
  let PASS = false;
  try {
    //
    //
    // evaluate 0002
    //

    const { name, note, amount } = figure;

    if (!amount || Number.isNaN(amount)) {
      message = `!-amount`;
      return handler.error<string>(message);
    }

    const lncrowdfundwrite = await ctx.models
      .createQueryBuilder()
      .insert()
      .into(LnCrowdfund)
      .values({
        amount,
        name,
        note,
      })
      .returning([`id`])
      .execute();

    if (
      lncrowdfundwrite &&
      lncrowdfundwrite.raw[0].id &&
      !Number.isNaN(lncrowdfundwrite.raw[0].id)
    ) {
      PASS = true;
    }

    if (!PASS) {
      message = `!-pass`;
      return handler.error<string>(message);
    }

    message = `complete`;

    //
    //
    // data 0002
    //
    const data: ShakaGraphData0002 = {
      notes: [`0002`],
    };

    return handler.solve<{ data: ShakaGraphData0002 }>({ data });
  } catch (ShakaGraphEvaluate0002Error) {
    return handler.error<string>(message);
  }
};
