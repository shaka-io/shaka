import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataTeamLoginConfirm } from "./shaka-graph-team-login-confirm-data";

@ObjectType()
export class ShakaGraphResolveTeamLoginConfirm extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataTeamLoginConfirm, { nullable: true })
  data?: ShakaGraphDataTeamLoginConfirm | null;
}
