import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresTeamSessionValidation {
  @Field(() => String)
  locale!: string;
}
