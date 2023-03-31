import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresLnInvoiceConfirm {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  hash!: string;
}
