/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddEnginDto } from 'src/engin/dtos/AddEngin.dto';
import { EtatInfoPipe } from 'src/engin/pipes/etat-info.pipe';
import { EnginService } from 'src/engin/services/engin/engin.service';

@Controller('engin')
export class EnginController {
    constructor(private readonly enginService: EnginService){}

    @Get('all')
    async getAllEngins(){
        return await this.enginService.getAllEngins();
    }

    @Post('add')
    async addNewEngin(@Body(EtatInfoPipe) engin : AddEnginDto){
        return await this.enginService.addNewEngin(engin)
    }
}
