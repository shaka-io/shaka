import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataTeamSessionHydrate } from "./shaka-graph-team-session-hydrate-data";

@ObjectType()
export class ShakaGraphResolveTeamSessionHydrate extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataTeamSessionHydrate, { nullable: true })
  data?: ShakaGraphDataTeamSessionHydrate | null;
}
