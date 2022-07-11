import { Exception } from '../../shared/domain/exception';

export class UserAlreadyRegister extends Exception {
  constructor() {
    super('this user id is already in use');
    this.name = UserAlreadyRegister.name;
  }
}
