import { inject, injectable } from 'inversify';
import { UserCreator } from './userCreator';
import { ProfileCreator } from '../../../profile/application/create/profileCreator';
import { userTypes } from '../../infrastructure/di/userTypes';
import { profileTypes } from '../../../profile/infrastructure/di/profileTypes';
import { Profile } from '../../../profile/domain/profile';
import { User } from '../../domain/user';
import { ProfileSearcher } from '../../../profile/application/search/profileSearcher';
import { PasswordHashing } from '../../../shared/domain/passwordHashing';
import { UserPassword } from '../../domain/valueObject/userPassword';
import { UserName } from '../../domain/valueObject/userName';
import { UserLastname } from '../../domain/valueObject/userLastname';
import { UserId } from '../../domain/valueObject/userId';
import { ProfileUsername } from '../../../profile/domain/valueObject/profileUsername';

@injectable()
export class RegisterUser {
  constructor(
    @inject(userTypes.userCreator) private readonly userCreator: UserCreator,
    @inject(profileTypes.profileSearcher) private readonly profileSearcher: ProfileSearcher,
    @inject(profileTypes.profileCreator) private readonly profileCreator: ProfileCreator,
    @inject(profileTypes.profileSearcher) private readonly passwordHashing: PasswordHashing,
  ) {
  }

  public async run(
    userId: UserId,
    name: UserName,
    lastname: UserLastname,
    password: UserPassword,
    username: ProfileUsername,
  ): Promise<void> {
    await this.checkIfUsernameAlreadyTaken(username);

    const user = User.create(
      userId,
      name,
      lastname,
      UserPassword.create(passwordHash),
    );

    Profile.create();

    const profile = await this.profileCreator.run(profile);
    await this.userCreator.run(user);
  }

  private async checkIfUsernameAlreadyTaken(username: ProfileUsername) {
    const userNameAlreadyTaken = await this.profileSearcher.run(username);

    if (userNameAlreadyTaken) {
      // TODO: THROW ERROR
    }
  }

  private createProfile() {

  }

  private async createUserWithHashedPassword(
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    password: UserPassword,
  ) {
    const hashedPassword = await this.hashPassword(password);

    return User.create(
      id,
      name,
      lastname,
      hashedPassword,
    );
  }

  private async hashPassword(password: UserPassword): UserPassword {
    const hashedPassword = await this.passwordHashing.hash(password.value);
    return UserPassword.create(hashedPassword);
  }
}
