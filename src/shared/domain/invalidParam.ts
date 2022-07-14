import { Exception } from './exception';
import { HttpStatusCode } from './httpStatusCode';

export class InvalidParam extends Exception {
  constructor(protected value: any, protected field: string) {
    super(HttpStatusCode.BAD_REQUEST, `${value} is an invalid value for ${field}`);
    this.name = InvalidParam.name;
  }
}
