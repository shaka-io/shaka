import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresLnInfo {
  @Field(() => String)
  locale!: string;
}
