import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TeamRecords } from "./TeamRecords";

@ObjectType()
@Entity()
export class Team extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  created!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updated!: Date;

  @Field(() => String)
  @Column()
  @Generated("uuid")
  key!: string;

  //
  //
  // model fields
  //

  @Field(() => String)
  @Column({ type: `varchar`, unique: true })
  credential!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  validation!: string;

  //
  //
  // model records
  //

  @Field(() => TeamRecords, { nullable: true })
  @Column({ type: "json", nullable: true, default: null })
  records!: TeamRecords | null;

  //
  //
  // model relations
  //
}
