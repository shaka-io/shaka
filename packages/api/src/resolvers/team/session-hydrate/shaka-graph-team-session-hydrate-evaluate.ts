import { Email } from "@shaka-js/models/lib/email/Email";
import { Team } from "@shaka-js/models/lib/team/Team";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataTeamSessionHydrate } from "./shaka-graph-team-session-hydrate-data";
import { ShakaGraphFiguresTeamSessionHydrate } from "./shaka-graph-team-session-hydrate-figure";
import { ShakaGraphResolveTeamSessionHydrate } from "./shaka-graph-team-session-hydrate-resolve";

export const ShakaGraphEvaluateTeamSessionHydrate = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresTeamSessionHydrate
): Promise<ShakaGraphResolveTeamSessionHydrate> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    //
    //
    // evaluate TeamSessionHydrate
    //

    const { session } = figure;

    const credential = await ctx.redis.get(`team-session::${session}`);

    if (!credential) {
      message = `!-credential`;
      return handler.error<string>(message);
    }

    const read = await ctx.models
      .createQueryBuilder(Team, "team")
      .where("team.credential = :credential", { credential })
      .getOne();

    if (!read) {
      message = `!-read`;
      return handler.error<string>(message);
    }

    const reademails = await ctx.models
      .createQueryBuilder(Email, "email")
      .getMany();

    message = `complete`;

    let emails: Email[] = [];

    emails = reademails.filter(
      (email) => email.address.toLowerCase() === read.credential.toLowerCase()
    );

    //
    //
    // data TeamSessionHydrate
    //
    const data: ShakaGraphDataTeamSessionHydrate = {
      notes: [`TeamSessionHydrate`, figure.locale],
      read,
      emails,
    };

    return handler.solve<{ data: ShakaGraphDataTeamSessionHydrate }>({ data });
  } catch (ShakaGraphEvaluateTeamSessionHydrateError) {
    return handler.error<string>(message);
  }
};
