import { User } from '../../../src/user/domain/user';
import { UserId } from '../../../src/user/domain/valueObject/userId';
import { UserName } from '../../../src/user/domain/valueObject/userName';
import { UserLastname } from '../../../src/user/domain/valueObject/userLastname';
import { Profile } from '../../../src/profile/domain/profile';

export class UserMother {
  public static create(
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    profile: Profile,
  ): User {
    return User.create(
      id,
      name,
      lastname,
      profile,
    );
  }
}
