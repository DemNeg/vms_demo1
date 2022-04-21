import { Test, TestingModule } from '@nestjs/testing';
import { ProtagonisteService } from './protagoniste.service';

describe('ProtagonisteService', () => {
  let service: ProtagonisteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProtagonisteService],
    }).compile();

    service = module.get<ProtagonisteService>(ProtagonisteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
