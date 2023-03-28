import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresLnInvoiceCreate {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  satoshis!: string;
}
