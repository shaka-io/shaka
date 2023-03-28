import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphDataLnInfo {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => String, { nullable: true })
  version?: string | null;
}
