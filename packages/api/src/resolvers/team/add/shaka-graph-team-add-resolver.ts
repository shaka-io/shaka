import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateTeamAdd } from "./shaka-graph-team-add-evaluate";
import { ShakaGraphFiguresTeamAdd } from "./shaka-graph-team-add-figure";
import { ShakaGraphResolveTeamAdd } from "./shaka-graph-team-add-resolve";

@Resolver()
export class ShakaGraphTeamAdd {
  @Mutation(() => ShakaGraphResolveTeamAdd)
  async ShakaGraphTeamAdd(
    @Arg(`figure`, () => ShakaGraphFiguresTeamAdd)
    figure: ShakaGraphFiguresTeamAdd,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveTeamAdd> {
    try {
      const response = await ShakaGraphEvaluateTeamAdd(ctx, figure);
      return response;
    } catch (ShakaGraphTeamAddError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
