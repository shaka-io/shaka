import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluate0003 } from "./shaka-graph-0003-evaluate";
import { ShakaGraphFigures0003 } from "./shaka-graph-0003-figure";
import { ShakaGraphResolve0003 } from "./shaka-graph-0003-resolve";

@Resolver()
export class ShakaGraph0003 {
  @Query(() => ShakaGraphResolve0003)
  async ShakaGraph0003(
    @Arg(`figure`, () => ShakaGraphFigures0003)
    figure: ShakaGraphFigures0003,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolve0003> {
    try {
      const response = await ShakaGraphEvaluate0003(ctx, figure);
      return response;
    } catch (ShakaGraph0003Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
