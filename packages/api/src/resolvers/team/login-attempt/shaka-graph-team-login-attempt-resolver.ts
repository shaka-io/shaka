import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateTeamLoginAttempt } from "./shaka-graph-team-login-attempt-evaluate";
import { ShakaGraphFiguresTeamLoginAttempt } from "./shaka-graph-team-login-attempt-figure";
import { ShakaGraphResolveTeamLoginAttempt } from "./shaka-graph-team-login-attempt-resolve";

@Resolver()
export class ShakaGraphTeamLoginAttempt {
  @Mutation(() => ShakaGraphResolveTeamLoginAttempt)
  async ShakaGraphTeamLoginAttempt(
    @Arg(`figure`, () => ShakaGraphFiguresTeamLoginAttempt)
    figure: ShakaGraphFiguresTeamLoginAttempt,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveTeamLoginAttempt> {
    try {
      const response = await ShakaGraphEvaluateTeamLoginAttempt(ctx, figure);
      return response;
    } catch (ShakaGraphTeamLoginAttemptError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
