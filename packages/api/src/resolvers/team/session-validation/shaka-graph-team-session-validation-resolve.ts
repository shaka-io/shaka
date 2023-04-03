import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataTeamSessionValidation } from "./shaka-graph-team-session-validation-data";

@ObjectType()
export class ShakaGraphResolveTeamSessionValidation extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataTeamSessionValidation, { nullable: true })
  data?: ShakaGraphDataTeamSessionValidation | null;
}
