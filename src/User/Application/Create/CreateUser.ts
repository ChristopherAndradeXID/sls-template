import { User } from '../../Domain/User';
import { AllUsers } from '../../Domain/AllUsers';
import { Success } from '../../../Shared/Domain/Dto/Success';
import { CreateUser as DomainCreateUser } from '../../Domain/Services/CreateUser';

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
