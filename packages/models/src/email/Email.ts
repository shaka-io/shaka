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
import { EmailRecords } from "./EmailRecords";

@ObjectType()
@Entity()
export class Email extends BaseEntity {
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
  @Column({ type: `varchar` })
  address!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  to!: string;

  //
  //
  // model records
  //

  @Field(() => EmailRecords, { nullable: true })
  @Column({ type: "json", nullable: true, default: null })
  records!: EmailRecords | null;

  //
  //
  // model relations
  //
}
