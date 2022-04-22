/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { etatInfo } from '../Generics/etatInfo.enum';

@Injectable()
export class EtatInfoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
      switch (value.etatInfo.toUpperCase()) {
        case etatInfo.EN_SAISI : {
          value.etatInfo = etatInfo.EN_SAISI
          break;
        }
        case etatInfo.SAISI_TERMINE : {
          value.etatInfo = etatInfo.SAISI_TERMINE
          break;
        }
        default: {
          value.etatInfo = etatInfo.EN_SAISI
          break;
        }
    }
    return value;
  }
}
