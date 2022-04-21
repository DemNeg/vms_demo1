/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EtatService } from './services/etat/etat.service';
import { EtatController } from './controllers/etat/etat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EnginSchema } from 'src/engin/models/engin.model';
import { EtatSchema } from './models/etat.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Etat',schema: EtatSchema}])],
  providers: [EtatService],
  controllers: [EtatController]
})
export class EtatModule {}
