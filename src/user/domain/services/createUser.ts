import { User } from '../user';
import { AllUsers } from '../allUsers';
import { UserAlreadyRegister } from '../userAlreadyRegister';

export class CreateUser {
  constructor(private readonly userRepository: AllUsers) {
  }

  public async run(user: User) {
    const userAlreadyRegister = await this.userRepository.withId(user.id);

    if (userAlreadyRegister) {
      throw new UserAlreadyRegister();
    }

    await this.userRepository.save(user);

    return user;
  }
}
