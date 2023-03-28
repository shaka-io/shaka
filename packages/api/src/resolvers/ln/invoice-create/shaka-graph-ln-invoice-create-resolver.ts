import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesServerContext } from "../../../server/types";
import { ShakaGraphEvaluateLnInvoiceCreate } from "./shaka-graph-ln-invoice-create-evaluate";
import { ShakaGraphFiguresLnInvoiceCreate } from "./shaka-graph-ln-invoice-create-figure";
import { ShakaGraphResolveLnInvoiceCreate } from "./shaka-graph-ln-invoice-create-resolve";

@Resolver()
export class ShakaGraphLnInvoiceCreate {
  @Mutation(() => ShakaGraphResolveLnInvoiceCreate)
  async ShakaGraphLnInvoiceCreate(
    @Arg(`figure`, () => ShakaGraphFiguresLnInvoiceCreate)
    figure: ShakaGraphFiguresLnInvoiceCreate,
    @Ctx() ctx: TypesServerContext
  ): Promise<ShakaGraphResolveLnInvoiceCreate> {
    try {
      const response = await ShakaGraphEvaluateLnInvoiceCreate(ctx, figure);
      return response;
    } catch (ShakaGraphLnInvoiceCreateError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
