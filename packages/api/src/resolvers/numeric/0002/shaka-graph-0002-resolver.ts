import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluate0002 } from "./shaka-graph-0002-evaluate";
import { ShakaGraphFigures0002 } from "./shaka-graph-0002-figure";
import { ShakaGraphResolve0002 } from "./shaka-graph-0002-resolve";

@Resolver()
export class ShakaGraph0002 {
  @Mutation(() => ShakaGraphResolve0002)
  async ShakaGraph0002(
    @Arg(`figure`, () => ShakaGraphFigures0002)
    figure: ShakaGraphFigures0002,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolve0002> {
    try {
      const response = await ShakaGraphEvaluate0002(ctx, figure);
      return response;
    } catch (ShakaGraph0002Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
