import { faker } from '@faker-js/faker';
import { UserLastname } from '../../../src/user/domain/valueObject/userLastname';

export class UserLastnameMother {
  public static create(lastname: string): UserLastname {
    return new UserLastname(lastname);
  }

  public static random() {
    return new UserLastname(faker.name.lastName());
  }
}
