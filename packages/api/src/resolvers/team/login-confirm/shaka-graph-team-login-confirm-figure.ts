import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresTeamLoginConfirm {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  credential!: string;

  @Field(() => String)
  passcode!: string;
}
