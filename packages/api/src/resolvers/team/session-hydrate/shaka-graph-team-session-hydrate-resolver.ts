import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateTeamSessionHydrate } from "./shaka-graph-team-session-hydrate-evaluate";
import { ShakaGraphFiguresTeamSessionHydrate } from "./shaka-graph-team-session-hydrate-figure";
import { ShakaGraphResolveTeamSessionHydrate } from "./shaka-graph-team-session-hydrate-resolve";

@Resolver()
export class ShakaGraphTeamSessionHydrate {
  @Query(() => ShakaGraphResolveTeamSessionHydrate)
  async ShakaGraphTeamSessionHydrate(
    @Arg(`figure`, () => ShakaGraphFiguresTeamSessionHydrate)
    figure: ShakaGraphFiguresTeamSessionHydrate,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveTeamSessionHydrate> {
    try {
      const response = await ShakaGraphEvaluateTeamSessionHydrate(ctx, figure);
      return response;
    } catch (ShakaGraphTeamSessionHydrateError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
