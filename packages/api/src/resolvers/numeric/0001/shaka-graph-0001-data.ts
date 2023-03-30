import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphData0001 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
