import { inject, injectable } from 'inversify';
import { userTypes } from '../../infrastructure/di/userTypes';
import { AllUsers } from '../../domain/allUsers';
import { User } from '../../domain/user';

@injectable()
export class UserCreator {
  constructor(@inject(userTypes.allUsers) private readonly allUsers: AllUsers) {
  }

  public async run(user: User): Promise<void> {
    await this.allUsers.save(user);
  }
}
