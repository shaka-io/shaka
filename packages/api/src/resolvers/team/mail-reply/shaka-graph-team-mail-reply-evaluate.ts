import { TypesServerContext } from "../../../server/types";
import { ShakaGraphDataTeamMailReply } from "./shaka-graph-team-mail-reply-data";
import { ShakaGraphFiguresTeamMailReply } from "./shaka-graph-team-mail-reply-figure";
import { ShakaGraphResolveTeamMailReply } from "./shaka-graph-team-mail-reply-resolve";

export const ShakaGraphEvaluateTeamMailReply = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFiguresTeamMailReply
): Promise<ShakaGraphResolveTeamMailReply> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;

  try {
    const { to, from, subject, msg, msgPrev } = figure;

    await ctx.classes.mail.send({
      to,
      frompref: from,
      subject: `Re: ${subject}`,
      text: `${msg}
      
- - - 

${msgPrev}`,
    });

    message = `complete`;

    //
    //
    // data TeamMailReply
    //
    const data: ShakaGraphDataTeamMailReply = {
      notes: [`TeamMailReply`, message],
    };

    return handler.solve<{ data: ShakaGraphDataTeamMailReply }>({ data });
  } catch (ShakaGraphEvaluateTeamMailReplyError) {
    return handler.error<string>(message);
  }
};
