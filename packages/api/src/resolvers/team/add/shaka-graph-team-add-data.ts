import { Team } from "@shaka-js/models/lib/team/Team";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataTeamAdd {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => Team, { nullable: true })
  read?: Team | null;
}
