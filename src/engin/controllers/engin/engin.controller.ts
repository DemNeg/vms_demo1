/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AddEnginDto } from 'src/engin/dtos/AddEngin.dto';
import { EnginService } from 'src/engin/services/engin/engin.service';

@Controller('engin')
export class EnginController {
    constructor(private readonly enginService: EnginService){}

    @Post('add')
    async addNewEngin(@Body() engin : AddEnginDto){
        return await this.enginService.addNewEngin(engin)
    }
}
