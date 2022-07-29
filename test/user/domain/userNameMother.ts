import { faker } from '@faker-js/faker';
import { UserName } from '../../../src/user/domain/valueObject/userName';

export class UserNameMother {
  public static create(name: string): UserName {
    return new UserName(name);
  }

  public static random() {
    return new UserName(faker.name.findName());
  }
}
