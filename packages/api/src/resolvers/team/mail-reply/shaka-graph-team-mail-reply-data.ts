import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataTeamMailReply {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
