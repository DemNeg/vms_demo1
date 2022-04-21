import { Test, TestingModule } from '@nestjs/testing';
import { EtatController } from './etat.controller';

describe('EtatController', () => {
  let controller: EtatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtatController],
    }).compile();

    controller = module.get<EtatController>(EtatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
