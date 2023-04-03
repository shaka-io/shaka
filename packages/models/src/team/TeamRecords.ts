import { Field, ObjectType } from "type-graphql";
import { ModelsNotes } from "../structures/ModelsNotes";

@ObjectType()
export class TeamRecords {
  @Field(() => [ModelsNotes], { nullable: true })
  notes?: ModelsNotes[] | null;
}
