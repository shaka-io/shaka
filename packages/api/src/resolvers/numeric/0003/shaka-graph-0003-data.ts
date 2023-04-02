import { LnCrowdfund } from "@shaka-js/models/lib/ln-crowdfund/LnCrowdfund";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ShakaGraphData0003 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => [LnCrowdfund], { nullable: true })
  list?: LnCrowdfund[] | null;
}
