/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Engin } from 'src/engin/models/engin.model';

@Injectable()
export class EnginService {

    constructor(@InjectModel('Engin') private readonly enginModel : Model<Engin>){}

    async addNewEngin(engin : Engin):Promise<Engin>{
        const newEngin = new this.enginModel(engin);
        return await newEngin.save();
    }
    
}
