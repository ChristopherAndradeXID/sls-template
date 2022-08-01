import { inject, injectable } from 'inversify';
import { AllUsers } from '../../domain/allUsers';
import { sharedTypes } from '../../../shared/infrastructure/di/sharedTypes';
import { ConnectionManager } from '../../../shared/infrastructure/connectionManager';
import { User } from '../../domain/user';
import { UserModel } from '../model/userModel';
import { Criteria } from '../../../shared/domain/criteria/criteria';

@injectable()
export class PgAllUsers implements AllUsers {
  constructor(@inject(sharedTypes.connection) private readonly connection: ConnectionManager) {
  }

  private static castToUserIfNotNull(userModel: UserModel | null) {
    if (userModel === null) {
      return null;
    }

    return User.fromPrimitives(userModel);
  }

  async save(user: User): Promise<void> {
    await this.connection.getRepository(UserModel)
      .save(UserModel.from(user));
  }

  async search(id: User['id']): Promise<User | null> {
    const userModel = await this.connection.getRepository(UserModel)
      .findOne({
        where: { id: id.value },
        loadRelationIds: false,
        relations: ['profile'],
      });

    return PgAllUsers.castToUserIfNotNull(userModel);
  }

  // eslint-disable-next-line class-methods-use-this
  async searchByCriteria(criteria: Criteria): Promise<User | null> {
    console.log(criteria);
    return null;
  }

  async remove(id: User['id']): Promise<void> {
    await this.connection.getRepository(UserModel).delete({
      id: id.value,
    });
  }
}
