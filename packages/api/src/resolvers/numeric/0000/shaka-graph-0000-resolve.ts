import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphData0000 } from "./shaka-graph-0000-data";

@ObjectType()
export class ShakaGraphResolve0000 extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphData0000, { nullable: true })
  data?: ShakaGraphData0000 | null;
}
