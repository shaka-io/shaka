import { TypesServerContext } from "../../../server/types";
import { ShakaGraphData0000 } from "./shaka-graph-0000-data";
import { ShakaGraphFigures0000 } from "./shaka-graph-0000-figure";
import { ShakaGraphResolve0000 } from "./shaka-graph-0000-resolve";

export const ShakaGraphEvaluate0000 = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFigures0000
): Promise<ShakaGraphResolve0000> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    //
    //
    // evaluate 0000
    //

    console.log(!!ctx, figure); // dev logging
    message = `complete`;

    //
    //
    // data 0000
    //
    const data: ShakaGraphData0000 = {
      notes: [`0000`],
    };

    return handler.solve<{ data: ShakaGraphData0000 }>({ data });
  } catch (ShakaGraphEvaluate0000Error) {
    return handler.error<string>(message);
  }
};
