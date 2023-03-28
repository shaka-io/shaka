import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateLnInfo } from "./shaka-graph-ln-info-evaluate";
import { ShakaGraphFiguresLnInfo } from "./shaka-graph-ln-info-figure";
import { ShakaGraphResolveLnInfo } from "./shaka-graph-ln-info-resolve";

@Resolver()
export class ShakaGraphLnInfo {
  @Query(() => ShakaGraphResolveLnInfo)
  async ShakaGraphLnInfo(
    @Arg(`figure`, () => ShakaGraphFiguresLnInfo)
    figure: ShakaGraphFiguresLnInfo,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveLnInfo> {
    try {
      const response = await ShakaGraphEvaluateLnInfo(ctx, figure);
      return response;
    } catch (ShakaGraphLnInfoError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
