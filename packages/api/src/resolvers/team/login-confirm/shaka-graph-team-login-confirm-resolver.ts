import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateTeamLoginConfirm } from "./shaka-graph-team-login-confirm-evaluate";
import { ShakaGraphFiguresTeamLoginConfirm } from "./shaka-graph-team-login-confirm-figure";
import { ShakaGraphResolveTeamLoginConfirm } from "./shaka-graph-team-login-confirm-resolve";

@Resolver()
export class ShakaGraphTeamLoginConfirm {
  @Mutation(() => ShakaGraphResolveTeamLoginConfirm)
  async ShakaGraphTeamLoginConfirm(
    @Arg(`figure`, () => ShakaGraphFiguresTeamLoginConfirm)
    figure: ShakaGraphFiguresTeamLoginConfirm,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveTeamLoginConfirm> {
    try {
      const response = await ShakaGraphEvaluateTeamLoginConfirm(ctx, figure);
      return response;
    } catch (ShakaGraphTeamLoginConfirmError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
