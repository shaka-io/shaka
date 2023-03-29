import { Field, ObjectType } from "type-graphql";
import { ModelsNotes } from "../structures/ModelsNotes";

@ObjectType()
export class EmailRecords {
  @Field(() => [ModelsNotes], { nullable: true })
  notes?: ModelsNotes[] | null;

  @Field(() => String)
  messageid!: string;

  @Field(() => String)
  recipient!: string;

  @Field(() => String)
  sender!: string;

  @Field(() => String)
  subject!: string;

  @Field(() => String)
  date!: string;

  @Field(() => String)
  from!: string;

  @Field(() => String)
  text!: string;
}
