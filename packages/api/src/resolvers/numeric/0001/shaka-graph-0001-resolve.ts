import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphData0001 } from "./shaka-graph-0001-data";

@ObjectType()
export class ShakaGraphResolve0001 extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphData0001, { nullable: true })
  data?: ShakaGraphData0001 | null;
}
