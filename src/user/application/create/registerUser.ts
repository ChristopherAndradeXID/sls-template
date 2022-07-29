import { inject, injectable } from 'inversify';
import { UserCreator } from './userCreator';
import { ProfileCreator } from '../../../profile/application/create/profileCreator';
import { userTypes } from '../../infrastructure/di/userTypes';
import { profileTypes } from '../../../profile/infrastructure/di/profileTypes';
import { Profile } from '../../../profile/domain/profile';
import { User } from '../../domain/user';

@injectable()
export class RegisterUser {
  constructor(
    @inject(userTypes.userCreator) private readonly userCreator: UserCreator,
    @inject(profileTypes.profileCreator) private readonly profileCreator: ProfileCreator,
  ) {
  }

  public async run(user: User, profile: Profile): Promise<void> {
    await this.profileCreator.run(profile);
    await this.userCreator.run(user);
  }
}
