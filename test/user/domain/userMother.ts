import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';
import { User } from '../../../src/user/domain/user';
import { UserId } from '../../../src/user/domain/valueObject/userId';
import { UserName } from '../../../src/user/domain/valueObject/userName';
import { UserLastname } from '../../../src/user/domain/valueObject/userLastname';
import { UserPassword } from '../../../src/user/domain/valueObject/userPassword';

export class UserMother {
  public static random() {
    return User.fromPrimitives({
      id: uuid(),
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      password: faker.internet.password(6),
    });
  }

  public static create(
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    password: UserPassword,
  ): User {
    return User.create(
      id,
      name,
      lastname,
      password,
    );
  }
}
