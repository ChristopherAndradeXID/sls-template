import { Exception } from '../../shared/domain/exception';
import { HttpStatusCode } from '../../shared/domain/httpStatusCode';

export class UserAlreadyRegister extends Exception {
  constructor() {
    super(HttpStatusCode.CONFLICT, 'this user id is already in use');
    this.name = UserAlreadyRegister.name;
  }
}
