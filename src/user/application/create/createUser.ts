import { User } from '../../domain/user';
import { AllUsers } from '../../domain/allUsers';
import { Success } from '../../../shared/infrastructure/Dto/Success';
import { CreateUser as DomainCreateUser } from '../../domain/services/createUser';

export class CreateUser {
  private createUser!: DomainCreateUser;

  constructor(private readonly userRepository: AllUsers) {
    this.createUser = new DomainCreateUser(userRepository);
  }

  public async run(id: string, userName: string, lastname: string) {
    const data = await this.createUser.run(User.fromPrimitives(id, userName, lastname));
    return new Success<User>(data);
  }
}
