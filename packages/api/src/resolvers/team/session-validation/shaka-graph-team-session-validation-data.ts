import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataTeamSessionValidation {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
