import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataLnInvoiceConfirm {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => Boolean)
  settled!: boolean;
}
