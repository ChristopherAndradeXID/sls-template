import { faker } from '@faker-js/faker';
import { ProfilePhotoUrl } from '../../../src/profile/domain/valueObject/profilePhotoUrl';
import { ProfileBiography } from '../../../src/profile/domain/valueObject/profileBiography';

export class ProfilePhotoUrlMother {
  public static create(photoUrl: string): ProfilePhotoUrl {
    return new ProfilePhotoUrl(photoUrl);
  }

  public static random() {
    return new ProfileBiography(faker.image.avatar());
  }
}
