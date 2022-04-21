import { Test, TestingModule } from '@nestjs/testing';
import { EnginService } from './engin.service';

describe('EnginService', () => {
  let service: EnginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnginService],
    }).compile();

    service = module.get<EnginService>(EnginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
