/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { typeEtat } from '../Genrics/typeEtat.enum';

@Injectable()
export class TypeToEnumPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    switch (value.typeEtat.toUpperCase()) {
      case typeEtat.FINANCIER : {
        value.typeEtat = typeEtat.FINANCIER
        break;
      }
      case typeEtat.ECONOMIQUE : {
        value.typeEtat = typeEtat.ECONOMIQUE
        break;
      }
      case typeEtat.LOGISTIQUE : {
        value.typeEtat = typeEtat.LOGISTIQUE
        break;
      }
      case typeEtat.MATERIAL : {
        value.typeEtat = typeEtat.MATERIAL
        break;
      }
      default: {
        value.typeEtat = typeEtat.MATERIAL
        console.log(value.typeEtat);
        break;
      }

    }
    return value;
  }
}
