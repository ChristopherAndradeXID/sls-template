import { Exception } from '../../shared/domain/exception';

export class UserAlreadyRegister extends Exception {
  constructor() {
    super(UserAlreadyRegister.name, 'this user id is already in use');
  }
}
