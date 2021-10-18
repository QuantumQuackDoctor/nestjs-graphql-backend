import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, MongoRepository, ObjectID } from 'typeorm';
import { Reimbursement, ReimbursementInput } from './reimbursment.entity';

@Injectable()
export class ReimbursementService {
  constructor(
    @InjectRepository(Reimbursement)
    private readonly reimbursmentRepository: MongoRepository<Reimbursement>,
  ) {}

  findAll() {
    return this.reimbursmentRepository.find();
  }

  findById(id: ObjectID) {
    return this.reimbursmentRepository.findOne({ id });
  }

  async createReimbursment(reimbursementInput: ReimbursementInput) {
    const reimbursement = await this.reimbursmentRepository.save(
      this.reimbursmentRepository.create({
        ...reimbursementInput,
        approved: false,
      }),
    );
    return reimbursement;
  }

  findByIds(ids: number[]) {
    return this.reimbursmentRepository.find({
      where: { id: In(ids) },
    });
  }
}
