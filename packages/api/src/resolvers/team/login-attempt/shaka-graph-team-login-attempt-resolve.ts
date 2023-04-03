import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataTeamLoginAttempt } from "./shaka-graph-team-login-attempt-data";

@ObjectType()
export class ShakaGraphResolveTeamLoginAttempt extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataTeamLoginAttempt, { nullable: true })
  data?: ShakaGraphDataTeamLoginAttempt | null;
}
