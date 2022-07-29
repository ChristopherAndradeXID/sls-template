import { faker } from '@faker-js/faker';
import { ProfileBiography } from '../../../src/profile/domain/valueObject/profileBiography';

export class ProfileBiographyMother {
  public static create(biography: string): ProfileBiography {
    return new ProfileBiography(biography);
  }

  public static random() {
    return new ProfileBiography(faker.lorem.lines(2));
  }
}
