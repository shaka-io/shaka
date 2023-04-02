import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphData0003 } from "./shaka-graph-0003-data";

@ObjectType()
export class ShakaGraphResolve0003 extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphData0003, { nullable: true })
  data?: ShakaGraphData0003 | null;
}
