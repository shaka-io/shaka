import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFigures0001 {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  contact!: string;

  @Field(() => String)
  content!: string;
}
