import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnginModule } from './engin/engin.module';
import { ProtagonisteModule } from './protagoniste/protagoniste.module';
import { EtatModule } from './etat/etat.module';
import { DocModule } from './doc/doc.module';

@Module({
  imports: [EnginModule, ProtagonisteModule, EtatModule, DocModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
