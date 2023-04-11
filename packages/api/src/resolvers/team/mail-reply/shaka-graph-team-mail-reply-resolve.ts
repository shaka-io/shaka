import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { ShakaGraphDataTeamMailReply } from "./shaka-graph-team-mail-reply-data";

@ObjectType()
export class ShakaGraphResolveTeamMailReply extends GraphObjectsResolve<string> {
  @Field(() => ShakaGraphDataTeamMailReply, { nullable: true })
  data?: ShakaGraphDataTeamMailReply | null;
}
