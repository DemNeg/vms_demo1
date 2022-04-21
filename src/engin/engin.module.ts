import { Module } from '@nestjs/common';
import { EnginService } from './services/engin/engin.service';
import { EnginController } from './controllers/engin/engin.controller';

@Module({
  providers: [EnginService],
  controllers: [EnginController]
})
export class EnginModule {}
