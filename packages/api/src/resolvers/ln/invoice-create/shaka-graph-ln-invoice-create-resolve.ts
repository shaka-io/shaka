import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataLnInvoiceCreate } from "./shaka-graph-ln-invoice-create-data";

@ObjectType()
export class ShakaGraphResolveLnInvoiceCreate extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataLnInvoiceCreate, { nullable: true })
  data?: ShakaGraphDataLnInvoiceCreate | null;
}
