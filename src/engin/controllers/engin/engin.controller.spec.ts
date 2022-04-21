import { Test, TestingModule } from '@nestjs/testing';
import { EnginController } from './engin.controller';

describe('EnginController', () => {
  let controller: EnginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnginController],
    }).compile();

    controller = module.get<EnginController>(EnginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
