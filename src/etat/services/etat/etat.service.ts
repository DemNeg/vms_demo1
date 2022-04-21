/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Etat } from 'src/etat/models/etat.model';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { AddEtatDto } from 'src/etat/dtos/AddEtat.dto';

@Injectable()
export class EtatService {
    
    constructor( @InjectModel('Etat') private readonly etatModel:Model<Etat>){}

    async addNewEtat(etat:AddEtatDto):Promise<Etat> {
        const etat_inter = {
            typeEtat: etat.typeEtat,
            valeurEtat: etat.valeurEtat,
            dateDebut: new Date()
        }
        const newEtat = new this.etatModel(etat_inter);
        return await newEtat.save();
    }
}
