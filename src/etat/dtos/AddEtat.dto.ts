/* eslint-disable prettier/prettier */

import { ParseEnumPipe } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

enum typeEtat {
    FINANCIER = 'Etat financier',
    ECONOMIQUE = 'Etat economique',
    LOGISTIQUE = 'Etat Logistique',
    MATERIAL = 'Etat Matereal'
}

export class AddEtatDto{
    
    @IsNotEmpty()
    typeEtat : typeEtat;
    @IsNotEmpty()
    @IsString()
    valeurEtat : string;
} 