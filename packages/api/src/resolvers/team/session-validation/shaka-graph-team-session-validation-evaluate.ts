import { Team } from "@shaka-js/models/lib/team/Team";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataTeamSessionValidation } from "./shaka-graph-team-session-validation-data";
import { ShakaGraphFiguresTeamSessionValidation } from "./shaka-graph-team-session-validation-figure";
import { ShakaGraphResolveTeamSessionValidation } from "./shaka-graph-team-session-validation-resolve";

export const ShakaGraphEvaluateTeamSessionValidation = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresTeamSessionValidation
): Promise<ShakaGraphResolveTeamSessionValidation> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    //
    //
    // evaluate TeamSessionValidation
    //

    if (!ctx.req.session.key1) {
      message = `!-key1`;
      return handler.error<string>(message);
    }

    const read = await ctx.models
      .createQueryBuilder(Team, "team")
      .where("team.key = :key", { key: ctx.req.session.key1 })
      .getOne();

    console.log(JSON.stringify(read, null, 4), `read`);

    if (!read) {
      message = `!-read`;
      return handler.error<string>(message);
    }

    message = `complete`;

    //
    //
    // data TeamSessionValidation
    //
    const data: ShakaGraphDataTeamSessionValidation = {
      notes: [`TeamSessionValidation`, figure.locale],
    };

    return handler.solve<{ data: ShakaGraphDataTeamSessionValidation }>({
      data,
    });
  } catch (ShakaGraphEvaluateTeamSessionValidationError) {
    return handler.error<string>(message);
  }
};
