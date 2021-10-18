import { Module } from '@nestjs/common';
import { ReimbursementService } from './reimbursement.service';
import { ReimbursementResolver } from './reimbursement.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reimbursement } from './reimbursment.entity';
import { MongoObjectId } from './ObjectIdScalar';

@Module({
  imports: [TypeOrmModule.forFeature([Reimbursement])],
  providers: [ReimbursementService, ReimbursementResolver, MongoObjectId],
})
export class ReimbursementModule {}
