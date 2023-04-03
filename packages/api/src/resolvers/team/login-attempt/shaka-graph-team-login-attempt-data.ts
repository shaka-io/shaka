import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataTeamLoginAttempt {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
