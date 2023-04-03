import { Team } from "@shaka-js/models/lib/team/Team";
import { gen } from "n-digit-token";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataTeamLoginAttempt } from "./shaka-graph-team-login-attempt-data";
import { ShakaGraphFiguresTeamLoginAttempt } from "./shaka-graph-team-login-attempt-figure";
import { ShakaGraphResolveTeamLoginAttempt } from "./shaka-graph-team-login-attempt-resolve";

export const ShakaGraphEvaluateTeamLoginAttempt = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresTeamLoginAttempt
): Promise<ShakaGraphResolveTeamLoginAttempt> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    const { credential } = figure;

    const read = await ctx.models
      .createQueryBuilder(Team, "team")
      .where("team.credential = :credential", { credential })
      .getOne();

    console.log(JSON.stringify(read, null, 4), `read`);

    if (!read) {
      message = `!-read`;
      return handler.error<string>(message);
    }

    const passcode = String(gen(6));

    await ctx.redis.set(
      `team-login::${passcode}`,
      credential,
      `EX`,
      1000 * 60 * 2
    );

    const mailsend = await ctx.classes.mail.send({
      to: read.validation,
      frompref: `login`,
      subject: `Shaka Team | Confirm your login request`,
      text: `Hello${read.records ? ` (add name)` : ``},
      
Confirm your login request with this pass code:

* ${passcode}

Pura vida!

— team.shaka.website`,
    });

    console.log(mailsend, `mailsend`);

    if (typeof mailsend === `string`) {
      message = `!-mail-send`;
      return handler.error<string>(message);
    }

    message = `complete`;

    //
    //
    // data TeamLoginAttempt
    //
    const data: ShakaGraphDataTeamLoginAttempt = {
      notes: [`TeamLoginAttempt`],
    };

    return handler.solve<{ data: ShakaGraphDataTeamLoginAttempt }>({ data });
  } catch (ShakaGraphEvaluateTeamLoginAttemptError) {
    return handler.error<string>(message);
  }
};
