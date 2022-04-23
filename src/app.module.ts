/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnginModule } from './engin/engin.module';
import { ProtagonisteModule } from './protagoniste/protagoniste.module';
import { EtatModule } from './etat/etat.module';
import { DocModule } from './doc/doc.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [EnginModule, ProtagonisteModule, EtatModule, DocModule, MongooseModule.forRoot('mongodb://'+process.env.MONGO_DB_USERNAME+':'+process.env.MONGO_DB_PASSWORD+'@mongodb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
