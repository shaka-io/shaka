import { LibraryRegExpEmail } from "@shaka-js/library/lib/regexp/email";
import { Team } from "@shaka-js/models/lib/team/Team";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataTeamAdd } from "./shaka-graph-team-add-data";
import { ShakaGraphFiguresTeamAdd } from "./shaka-graph-team-add-figure";
import { ShakaGraphResolveTeamAdd } from "./shaka-graph-team-add-resolve";

export const ShakaGraphEvaluateTeamAdd = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresTeamAdd
): Promise<ShakaGraphResolveTeamAdd> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  let PASS = false;
  try {
    const { credential, validation } = figure;

    if (!LibraryRegExpEmail.test(validation)) {
      message = `!-validation`;
      return handler.error<string>(message);
    }

    const teamwrite = await ctx.models
      .createQueryBuilder()
      .insert()
      .into(Team)
      .values({
        credential,
        validation,
      })
      .returning([`id`])
      .execute();

    if (
      teamwrite &&
      teamwrite.raw[0].id &&
      !Number.isNaN(teamwrite.raw[0].id)
    ) {
      PASS = true;
    }

    if (!PASS) {
      message = `!-pass`;
      return handler.error<string>(message);
    }

    message = `complete`;

    //
    //
    // data TeamAdd
    //
    const data: ShakaGraphDataTeamAdd = {
      notes: [`TeamAdd`],
    };

    return handler.solve<{ data: ShakaGraphDataTeamAdd }>({ data });
  } catch (ShakaGraphEvaluateTeamAddError) {
    return handler.error<string>(message);
  }
};
