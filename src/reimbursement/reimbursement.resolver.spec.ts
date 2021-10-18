import { Test, TestingModule } from '@nestjs/testing';
import { ReimbursementResolver } from './reimbursement.resolver';

describe('ReimbursementResolver', () => {
  let resolver: ReimbursementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReimbursementResolver],
    }).compile();

    resolver = module.get<ReimbursementResolver>(ReimbursementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
