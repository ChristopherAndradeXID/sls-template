import { inject, injectable } from 'inversify';
import { AllUsers } from '../../domain/allUsers';
import { sharedTypes } from '../../../shared/infrastructure/di/sharedTypes';
import { ConnectionManager } from '../../../shared/infrastructure/connectionManager';
import { User } from '../../domain/user';
import { UserModel } from '../model/userModel';

@injectable()
export class PgAllUsers implements AllUsers {
  constructor(@inject(sharedTypes.connection) private readonly connection: ConnectionManager) {
  }

  async save(user: User): Promise<void> {
    await this.connection.getRepository(UserModel)
      .insert(UserModel.from(user));
  }
}
