/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsMongoId, IsNotEmpty, IsString, Length, length } from "class-validator";
import { etatInfo } from "src/engin/Generics/etatInfo.enum";

export class AddEtatDto{
    
    @IsNotEmpty()
    typeEtat : etatInfo;
    
    @IsNotEmpty()
    @IsString()
    valeurEtat : string;

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    enginId:string;
} 