import { faker } from '@faker-js/faker';
import { ProfileWebsite } from '../../../src/profile/domain/valueObject/profileWebsite';

export class ProfileWebsiteMother {
  public static create(website: string): ProfileWebsite {
    return new ProfileWebsite(website);
  }

  public static random(): ProfileWebsite {
    return new ProfileWebsite(faker.internet.url());
  }
}
