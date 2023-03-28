import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluate0000 } from "./shaka-graph-0000-evaluate";
import { ShakaGraphFigures0000 } from "./shaka-graph-0000-figure";
import { ShakaGraphResolve0000 } from "./shaka-graph-0000-resolve";

@Resolver()
export class ShakaGraph0000 {
  @Query(() => ShakaGraphResolve0000)
  async ShakaGraph0000(
    @Arg(`figure`, () => ShakaGraphFigures0000)
    figure: ShakaGraphFigures0000,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolve0000> {
    try {
      const response = await ShakaGraphEvaluate0000(ctx, figure);
      return response;
    } catch (ShakaGraph0000Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
