import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';
import { User } from '../../../src/user/domain/user';
import { UserId } from '../../../src/user/domain/valueObject/userId';
import { UserName } from '../../../src/user/domain/valueObject/userName';
import { UserLastname } from '../../../src/user/domain/valueObject/userLastname';
import { Profile } from '../../../src/profile/domain/profile';
import { ProfileMother } from '../../profile/domain/profileMother';

export class UserMother {
  public static random() {
    return User.fromPrimitives({
      id: uuid(),
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      profile: ProfileMother.random().toPrimitives(),
    });
  }

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
