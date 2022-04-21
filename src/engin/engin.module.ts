/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EnginService } from './services/engin/engin.service';
import { EnginController } from './controllers/engin/engin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EnginSchema } from './models/engin.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Engin',schema: EnginSchema}])],
  providers: [EnginService],
  controllers: [EnginController]
})
export class EnginModule {}
