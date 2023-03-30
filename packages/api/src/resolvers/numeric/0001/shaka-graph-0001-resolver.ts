import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluate0001 } from "./shaka-graph-0001-evaluate";
import { ShakaGraphFigures0001 } from "./shaka-graph-0001-figure";
import { ShakaGraphResolve0001 } from "./shaka-graph-0001-resolve";

@Resolver()
export class ShakaGraph0001 {
  @Mutation(() => ShakaGraphResolve0001)
  async ShakaGraph0001(
    @Arg(`figure`, () => ShakaGraphFigures0001)
    figure: ShakaGraphFigures0001,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolve0001> {
    try {
      const response = await ShakaGraphEvaluate0001(ctx, figure);
      return response;
    } catch (ShakaGraph0001Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
