import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresTeamSessionHydrate {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  session!: string;
}
