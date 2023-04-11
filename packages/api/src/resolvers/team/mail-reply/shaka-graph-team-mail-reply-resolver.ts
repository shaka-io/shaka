import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateTeamMailReply } from "./shaka-graph-team-mail-reply-evaluate";
import { ShakaGraphFiguresTeamMailReply } from "./shaka-graph-team-mail-reply-figure";
import { ShakaGraphResolveTeamMailReply } from "./shaka-graph-team-mail-reply-resolve";

@Resolver()
export class ShakaGraphTeamMailReply {
  @Mutation(() => ShakaGraphResolveTeamMailReply)
  async ShakaGraphTeamMailReply(
    @Arg(`figure`, () => ShakaGraphFiguresTeamMailReply)
    figure: ShakaGraphFiguresTeamMailReply,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveTeamMailReply> {
    try {
      const response = await ShakaGraphEvaluateTeamMailReply(ctx, figure);
      return response;
    } catch (ShakaGraphTeamMailReplyError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
