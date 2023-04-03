import { Email } from "@shaka-js/models/lib/email/Email";
import { Team } from "@shaka-js/models/lib/team/Team";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataTeamSessionHydrate {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => Team, { nullable: true })
  read?: Team | null;

  @Field(() => [Email], { nullable: true })
  emails?: Email[] | null;
}
