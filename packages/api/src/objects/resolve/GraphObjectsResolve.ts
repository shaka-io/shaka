import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GraphObjectsResolve<T> {
  @Field(() => Boolean)
  pass!: boolean;

  @Field(() => String, { nullable: true })
  message?: T | null;

  @Field(() => Number)
  timestamp!: number;

  @Field(() => String)
  ray!: string;

  @Field(() => String)
  hash!: string;
}
