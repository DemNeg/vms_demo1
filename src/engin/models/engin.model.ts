/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose";

enum etatInfo {
    EN_SAISI = 'En cours de saisie',
    TERMINE = 'Saisie termine'
}

export const EnginSchema = new mongoose.Schema({
    reference : String,
    numChassis : String,
    designation : String,
    liensImages : [
        {
            title: String,url: String
        }
    ],
    taxonomie : {
        label: String,
        description: String
    },
    etatInfo : {
        type : String,
        enum : Object.values(etatInfo),
        default: etatInfo.EN_SAISI,
        required: true
    },
    marquee : {
        nomMarquee: String,
        realisateur: String,
        dateModel: Date,
        listSeries :[{
            nomSerie: String,
            dateSerie:Date,
            listModels: [{
                nomModel: String,
                dateModel: Date
            }]
        }]
    },
    instanceCaract : {
        groupe : String,
        label : String,
        operation : String,
        listVal : [
            {
                item: String,
                valeur: String
            }
        ]
    },
    refsProtagonistes : [
        {
            id: mongoose.Types.ObjectId,
        }
    ],
    refsEtats : [
        {
            id: mongoose.Types.ObjectId,
        }
    ]

});



export interface Engin{
    reference : string,
    numChassis : string,
    designation : string,
    liensImages : [
        {
            title: string,url: string
        }
    ],
    taxonomie : {
        label: string,
        description: string
    },
    etatInfo : etatInfo,
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
    },
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
    },
    refsProtagonistes : [
        {
            id: string,
        }
    ],
    refsEtats : [
        {
            id: string,
        }
    ]
}

