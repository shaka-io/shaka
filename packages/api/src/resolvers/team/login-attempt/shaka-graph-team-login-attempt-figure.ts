import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresTeamLoginAttempt {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  credential!: string;
}
