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
import { ModelsRecords } from "../structures/ModelsRecords";

@ObjectType()
@Entity()
export class LnCrowdfund extends BaseEntity {
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

  @Field(() => String, { nullable: true })
  @Column({ type: `varchar`, nullable: true })
  name!: string | null;

  @Field(() => String, { nullable: true })
  @Column({ type: `varchar`, nullable: true })
  note!: string | null;

  @Field(() => String)
  @Column({ type: `varchar` })
  amount!: string;

  //
  //
  // model records
  //
  @Field(() => ModelsRecords, { nullable: true })
  @Column({ type: "json", nullable: true, default: null })
  records!: ModelsRecords | null;

  //
  //
  // model relations
  //
}
