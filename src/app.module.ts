/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnginModule } from './engin/engin.module';
import { ProtagonisteModule } from './protagoniste/protagoniste.module';
import { EtatModule } from './etat/etat.module';
import { DocModule } from './doc/doc.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EnginModule, ProtagonisteModule, EtatModule, DocModule, MongooseModule.forRoot('mongodb://localhost/vms_demo1')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
