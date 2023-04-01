import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphData0002 } from "./shaka-graph-0002-data";

@ObjectType()
export class ShakaGraphResolve0002 extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphData0002, { nullable: true })
  data?: ShakaGraphData0002 | null;
}
