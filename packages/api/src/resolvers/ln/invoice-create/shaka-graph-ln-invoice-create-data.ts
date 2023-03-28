import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataLnInvoiceCreate {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => String)
  hash!: string;

  @Field(() => String)
  ln!: string;
}
