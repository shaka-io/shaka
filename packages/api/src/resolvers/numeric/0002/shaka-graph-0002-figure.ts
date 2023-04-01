import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFigures0002 {
  @Field(() => String)
  locale!: string;

  @Field(() => String, { nullable: true })
  name!: string | null;

  @Field(() => String, { nullable: true })
  note!: string | null;

  @Field(() => String)
  amount!: string;
}
