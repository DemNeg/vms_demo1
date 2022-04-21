import { Module } from '@nestjs/common';
import { ProtagonisteController } from './controllers/protagoniste/protagoniste.controller';
import { ProtagonisteService } from './services/protagoniste/protagoniste.service';

@Module({
  controllers: [ProtagonisteController],
  providers: [ProtagonisteService]
})
export class ProtagonisteModule {}
