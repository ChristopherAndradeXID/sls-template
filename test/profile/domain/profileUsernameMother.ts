import { faker } from '@faker-js/faker';
import { ProfileUsername } from '../../../src/profile/domain/valueObject/profileUsername';

export class ProfileUsernameMother {
  public static create(username: string) {
    return new ProfileUsername(username);
  }

  public static random() {
    return new ProfileUsername(faker.internet.userName());
  }
}
