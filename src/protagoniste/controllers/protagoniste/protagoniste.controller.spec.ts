import { Test, TestingModule } from '@nestjs/testing';
import { ProtagonisteController } from './protagoniste.controller';

describe('ProtagonisteController', () => {
  let controller: ProtagonisteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtagonisteController],
    }).compile();

    controller = module.get<ProtagonisteController>(ProtagonisteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
