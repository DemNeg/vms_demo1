/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AddEtatDto } from 'src/etat/dtos/AddEtat.dto';
import { EtatService } from 'src/etat/services/etat/etat.service';

@Controller('etat')
export class EtatController {

    constructor(private readonly etatService:EtatService){}

    @Post('add')
    async addNewEtat(@Body() etat: AddEtatDto){
        return this.etatService.addNewEtat(etat);
    }
}
