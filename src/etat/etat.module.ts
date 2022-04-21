import { Module } from '@nestjs/common';
import { EtatService } from './services/etat/etat.service';
import { EtatController } from './controllers/etat/etat.controller';

@Module({
  providers: [EtatService],
  controllers: [EtatController]
})
export class EtatModule {}
