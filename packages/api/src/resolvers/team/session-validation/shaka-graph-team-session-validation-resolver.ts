import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateTeamSessionValidation } from "./shaka-graph-team-session-validation-evaluate";
import { ShakaGraphFiguresTeamSessionValidation } from "./shaka-graph-team-session-validation-figure";
import { ShakaGraphResolveTeamSessionValidation } from "./shaka-graph-team-session-validation-resolve";

@Resolver()
export class ShakaGraphTeamSessionValidation {
  @Query(() => ShakaGraphResolveTeamSessionValidation)
  async ShakaGraphTeamSessionValidation(
    @Arg(`figure`, () => ShakaGraphFiguresTeamSessionValidation)
    figure: ShakaGraphFiguresTeamSessionValidation,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveTeamSessionValidation> {
    try {
      const response = await ShakaGraphEvaluateTeamSessionValidation(
        ctx,
        figure
      );
      return response;
    } catch (ShakaGraphTeamSessionValidationError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
