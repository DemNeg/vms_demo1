/* eslint-disable prettier/prettier */
import mongoose from "mongoose";
import { typeEtat } from "../Genrics/typeEtat.enum";

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
    dateFin : Date,
    enginId:{
        type: mongoose.Types.ObjectId
    } 
})


export interface Etat{
    typeEtat : typeEtat,
    valeurEtat : string,
    dateDebut : Date,
    dateFin : Date,
    enginId :string

} 