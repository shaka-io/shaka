import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataLnInvoiceConfirm } from "./shaka-graph-ln-invoice-confirm-data";

@ObjectType()
export class ShakaGraphResolveLnInvoiceConfirm extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataLnInvoiceConfirm, { nullable: true })
  data?: ShakaGraphDataLnInvoiceConfirm | null;
}
