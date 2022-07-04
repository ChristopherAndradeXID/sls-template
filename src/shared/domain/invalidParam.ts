import { Exception } from './exception';

export class InvalidParam extends Exception {
  constructor(protected value: any, protected field: string) {
    super(`${value} is an invalid value for ${field}`);
    this.name = InvalidParam.name;
  }
}
