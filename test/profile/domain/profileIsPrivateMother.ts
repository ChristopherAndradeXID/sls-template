import { faker } from '@faker-js/faker';
import { ProfileIsPrivate } from '../../../src/profile/domain/valueObject/profileIsPrivate';

export class ProfileIsPrivateMother {
  public static create(value: boolean) {
    return new ProfileIsPrivate(value);
  }

  public static random() {
    return new ProfileIsPrivate(faker.datatype.boolean());
  }
}
