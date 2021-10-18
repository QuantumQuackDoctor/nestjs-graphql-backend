import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectID } from 'typeorm';
import { MongoObjectId } from './ObjectIdScalar';
import { ReimbursementService } from './reimbursement.service';
import { Reimbursement, ReimbursementInput } from './reimbursment.entity';

@Resolver()
export class ReimbursementResolver {
  constructor(private readonly reimbursementService: ReimbursementService) {}

  @Query(() => [Reimbursement], {
    name: 'reimbursements',
    nullable: false,
  })
  async getReimbursements() {
    return this.reimbursementService.findAll();
  }

  @Query(() => Reimbursement, { name: 'reimbursement', nullable: true })
  async getUserById(
    @Args({ name: 'id', type: () => MongoObjectId }) id: ObjectID,
  ) {
    return this.reimbursementService.findById(id);
  }

  @Mutation(() => Reimbursement)
  async createReimbursement(
    @Args('data') input: ReimbursementInput,
  ): Promise<Reimbursement> {
    return this.reimbursementService.createReimbursment(input);
  }
}
