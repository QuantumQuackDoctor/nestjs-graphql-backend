import { Field, Float, InputType, ObjectType, Scalar } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { MongoObjectId } from './ObjectIdScalar';

@Entity('reimbursments')
@ObjectType()
export class Reimbursement {
  @ObjectIdColumn()
  @Field(() => MongoObjectId, { nullable: true })
  id: ObjectID;

  @Column({ nullable: false })
  @Field(() => Float, { nullable: false })
  amountRequested: number;

  @Column({ nullable: false })
  @Field({ nullable: false })
  tax: number;

  //TODO add user field

  @Column({ nullable: false })
  @Field({ nullable: false })
  approved: boolean;

  //TODO add approved by

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;
}

@InputType()
export class ReimbursementInput {
  @Field(() => Float, { nullable: false })
  amountRequested: number;

  @Field(() => Float, { nullable: false })
  tax: number;
}
