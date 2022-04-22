/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { etatInfo } from "../Generics/etatInfo.enum";

export class AddEnginDto{

    @IsNotEmpty()
    @IsString()
    reference : string;
    
    @IsNotEmpty()
    @IsString()
    numChassis : string;

    @IsNotEmpty()
    @IsString()
    designation : string;
    
    @IsNotEmpty()
    liensImages : [
        {
            title: string,url: string
        }
    ];
    @IsNotEmpty()
    taxonomie : {
        label: string,
        description: string
    };
    @IsNotEmpty()
    etatInfo : etatInfo;
    @IsNotEmpty()
    marquee : {
        nomMarquee: string,
        realisateur: string,
        dateModel: Date,
        listSeries :[{
            nomSerie: string,
            dateSerie:Date,
            listModels: [{
                nomModel: string,
                dateModel: Date
            }]
        }]
    };
    @IsNotEmpty()
    instanceCaract : {
        groupe : string,
        label : string,
        operation : string,
        listVal : [
            {
                item: string,
                valeur: string
            }
        ]
    };
    @IsOptional()
    refsProtagonistes : [
        {
            id: string,
        }
    ];
    
}