import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataTeamLoginConfirm {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
