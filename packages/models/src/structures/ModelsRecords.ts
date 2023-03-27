import { Field, ObjectType } from "type-graphql";
import { ModelsNotes } from "./ModelsNotes";

@ObjectType()
export class ModelsRecords {
  @Field(() => [ModelsNotes], { nullable: true })
  notes?: ModelsNotes[] | null;
}
