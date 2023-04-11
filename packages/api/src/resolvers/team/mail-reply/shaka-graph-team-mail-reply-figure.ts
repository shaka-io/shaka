import { Field, InputType } from "type-graphql";

@InputType()
export class ShakaGraphFiguresTeamMailReply {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  to!: string;

  @Field(() => String)
  from!: string;

  @Field(() => String)
  subject!: string;

  @Field(() => String)
  msg!: string;

  @Field(() => String)
  msgPrev!: string;
}
