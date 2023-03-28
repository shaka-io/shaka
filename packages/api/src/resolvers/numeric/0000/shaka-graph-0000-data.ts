import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphData0000 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
