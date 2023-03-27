import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ModelsNotes {
  @Field(() => String)
  date!: string;

  @Field(() => String)
  key!: string;

  @Field(() => [String])
  list!: string[];
}
