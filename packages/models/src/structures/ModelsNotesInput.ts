import { Field, InputType } from "type-graphql";

@InputType()
export class ModelsNotesInput {
  @Field(() => String)
  date!: string;

  @Field(() => String)
  key!: string;

  @Field(() => [String])
  list!: string[];
}
