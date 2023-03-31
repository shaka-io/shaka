import { LibraryRegExpEmail } from "@shaka-js/library/lib/regexp/email";
import { Question } from "@shaka-js/models/lib/question/Question";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphData0001 } from "./shaka-graph-0001-data";
import { ShakaGraphFigures0001 } from "./shaka-graph-0001-figure";
import { ShakaGraphResolve0001 } from "./shaka-graph-0001-resolve";

export const ShakaGraphEvaluate0001 = async (
  ctx: TypesServerContext,
  figure: ShakaGraphFigures0001
): Promise<ShakaGraphResolve0001> => {
  const {
    classes: { handler },
  } = ctx;
  let message = `error`;
  let PASS = false;
  try {
    //
    //
    // evaluate 0001
    //

    const { title, contact, content } = figure;

    if (!LibraryRegExpEmail.test(contact)) {
      message = `!-contact`;
      return handler.error<string>(message);
    }

    const questionwrite = await ctx.models
      .createQueryBuilder()
      .insert()
      .into(Question)
      .values({
        title,
        contact,
        content,
      })
      .returning([`id`])
      .execute();

    if (
      questionwrite &&
      questionwrite.raw[0].id &&
      !Number.isNaN(questionwrite.raw[0].id)
    ) {
      PASS = true;
    }

    if (!PASS) {
      message = `!-pass`;
      return handler.error<string>(message);
    }

    message = `complete`;

    const mailsend = await ctx.classes.mail.send({
      to: contact,
      frompref: `contact`,
      subject: `Shaka | We received your question`,
      text: `Hello ${title},
      
Thank you for your interest in Shaka! 

We have received your question and will be in touch with you soon. 

Pura vida!

— The Shaka Team`,
    });

    console.log(mailsend, `mailsend`);

    if (typeof mailsend === `string`) {
      message = `!-mail-send`;
      return handler.error<string>(message);
    }

    //
    //
    // data 0001
    //
    const data: ShakaGraphData0001 = {
      notes: [`0001`],
    };

    return handler.solve<{ data: ShakaGraphData0001 }>({ data });
  } catch (ShakaGraphEvaluate0001Error) {
    return handler.error<string>(message);
  }
};
