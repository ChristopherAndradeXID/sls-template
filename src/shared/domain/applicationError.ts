import { Exception } from './exception';

export class ApplicationError extends Exception {
  constructor() {
    super('An application error has occurred');
    this.name = ApplicationError.name;
  }
}
