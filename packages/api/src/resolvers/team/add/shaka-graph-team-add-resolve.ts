import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataTeamAdd } from "./shaka-graph-team-add-data";

@ObjectType()
export class ShakaGraphResolveTeamAdd extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataTeamAdd, { nullable: true })
  data?: ShakaGraphDataTeamAdd | null;
}
