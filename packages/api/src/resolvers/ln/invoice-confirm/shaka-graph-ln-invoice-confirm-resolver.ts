import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateLnInvoiceConfirm } from "./shaka-graph-ln-invoice-confirm-evaluate";
import { ShakaGraphFiguresLnInvoiceConfirm } from "./shaka-graph-ln-invoice-confirm-figure";
import { ShakaGraphResolveLnInvoiceConfirm } from "./shaka-graph-ln-invoice-confirm-resolve";

@Resolver()
export class ShakaGraphLnInvoiceConfirm {
  @Mutation(() => ShakaGraphResolveLnInvoiceConfirm)
  async ShakaGraphLnInvoiceConfirm(
    @Arg(`figure`, () => ShakaGraphFiguresLnInvoiceConfirm)
    figure: ShakaGraphFiguresLnInvoiceConfirm,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveLnInvoiceConfirm> {
    try {
      const response = await ShakaGraphEvaluateLnInvoiceConfirm(ctx, figure);
      return response;
    } catch (ShakaGraphLnInvoiceConfirmError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
