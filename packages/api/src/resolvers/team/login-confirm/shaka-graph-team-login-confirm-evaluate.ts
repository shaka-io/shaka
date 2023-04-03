import { Team } from "@shaka-js/models/lib/team/Team";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataTeamLoginConfirm } from "./shaka-graph-team-login-confirm-data";
import { ShakaGraphFiguresTeamLoginConfirm } from "./shaka-graph-team-login-confirm-figure";
import { ShakaGraphResolveTeamLoginConfirm } from "./shaka-graph-team-login-confirm-resolve";

export const ShakaGraphEvaluateTeamLoginConfirm = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresTeamLoginConfirm
): Promise<ShakaGraphResolveTeamLoginConfirm> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    const { credential, passcode } = figure;

    const read = await ctx.models
      .createQueryBuilder(Team, "team")
      .where("team.credential = :credential", { credential })
      .getOne();

    if (!read) {
      message = `!-read`;
      return handler.error<string>(message);
    }

    const foundcredential = await ctx.redis.get(`team-login::${passcode}`);

    console.log(JSON.stringify(foundcredential, null, 4), `foundcredential`);

    if (!(foundcredential === credential)) {
      message = `!-credential`;
      return handler.error<string>(message);
    }

    await ctx.redis.del(`team-login::${passcode}`);

    // eslint-disable-next-line no-param-reassign
    ctx.req.session.key1 = read.key;

    message = `complete`;

    //
    //
    // data TeamLoginConfirm
    //
    const data: ShakaGraphDataTeamLoginConfirm = {
      notes: [`TeamLoginConfirm`],
    };

    return handler.solve<{ data: ShakaGraphDataTeamLoginConfirm }>({ data });
  } catch (ShakaGraphEvaluateTeamLoginConfirmError) {
    return handler.error<string>(message);
  }
};
