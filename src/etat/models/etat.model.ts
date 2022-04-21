/* eslint-disable prettier/prettier */
import mongoose from "mongoose";

enum typeEtat {
    FINANCIER = 'Etat financier',
    ECONOMIQUE = 'Etat economique',
    LOGISTIQUE = 'Etat Logistique',
    MATERIAL = 'Etat Matereal'
}

export const EtatSchema = new mongoose.Schema({
    typeEtat : {
        type: String,
        enum: Object.values(typeEtat),
        default:typeEtat.MATERIAL
    },
    valeurEtat : {
        type : String,
        default:'NEW'
    },
    dateDebut : Date,
    dateFin : Date
})


export interface Etat{
    typeEtat : typeEtat,
    valeurEtat : string,
    dateDebut : Date,
    dateFin : Date
} 