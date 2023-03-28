import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataLnInfo } from "./shaka-graph-ln-info-data";

@ObjectType()
export class ShakaGraphResolveLnInfo extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataLnInfo, { nullable: true })
  data?: ShakaGraphDataLnInfo | null;
}
