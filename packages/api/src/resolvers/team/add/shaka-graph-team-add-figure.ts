import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresTeamAdd {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  credential!: string;

  @Field(() => String)
  validation!: string;
}
