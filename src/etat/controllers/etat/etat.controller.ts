/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AddEtatDto } from 'src/etat/dtos/AddEtat.dto';
import { TypeToEnumPipe } from 'src/etat/pipes/type-to-enum.pipe';
import { EtatService } from 'src/etat/services/etat/etat.service';

@Controller('etat')
export class EtatController {

    constructor(private readonly etatService:EtatService){}

    @Post('add')
    async addNewEtat(@Body(TypeToEnumPipe) etat: AddEtatDto){
        console.log(etat);
        return this.etatService.addNewEtat(etat);
    }
}
