import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphData0002 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
