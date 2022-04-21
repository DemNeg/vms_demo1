import { IsNotEmpty, IsOptional, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
enum etatInfo {
    EN_SAISI = 'En cours de saisie',
    TERMINE = 'Saisie termine'
}

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
    @IsNotEmpty()
    refsEtats : [
        {
            id: string,
        }
    ]
}