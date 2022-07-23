import { inject, injectable } from 'inversify';
import { AllExamples } from '../../domain/allExamples';
import { Example } from '../../domain/example';
import { User } from '../../../user/domain/user';
import { ConnectionManager } from '../../../shared/infrastructure/connectionManager';
import { UserModel } from '../../../user/infrastructure/model/userModel';
import { sharedTypes } from '../../../shared/infrastructure/di/sharedTypes';

@injectable()
export class InMemoryAllExamples implements AllExamples {
  private readonly examples: Example[] = [];

  constructor(@inject(sharedTypes.connection) private connection: ConnectionManager) {
  }

  save(example: Example): void {
    this.examples.push(example);
  }

  async createUser(user: User): Promise<void> {
    const userModel = UserModel.from(user);
    const repository = await this.connection.getRepository(UserModel);
    await repository.insert(userModel);
  }
}
