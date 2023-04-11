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

@ObjectType()
@Entity()
export class Question extends BaseEntity {
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
  title!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  contact!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  content!: string;

  @Field(() => String, { nullable: true })
  @Column({ type: `varchar`, nullable: true })
  opt!: string;

  //
  //
  // model records
  //

  //
  //
  // model relations
  //
}
