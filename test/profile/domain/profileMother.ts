import { Profile } from '../../../src/profile/domain/profile';
import { ProfileIdMother } from './profileIdMother';
import { ProfileUsernameMother } from './profileUsernameMother';
import { ProfileBiographyMother } from './profileBiographyMother';
import { ProfilePhotoUrlMother } from './ProfilePhotoUrlMother';
import { ProfileWebsiteMother } from './profileWebsiteMother';
import { ProfileIsPrivateMother } from './profileIsPrivateMother';
import { ProfileId } from '../../../src/profile/domain/valueObject/profileId';
import { ProfileUsername } from '../../../src/profile/domain/valueObject/profileUsername';
import { ProfileBiography } from '../../../src/profile/domain/valueObject/profileBiography';
import { ProfilePhotoUrl } from '../../../src/profile/domain/valueObject/profilePhotoUrl';
import { ProfileWebsite } from '../../../src/profile/domain/valueObject/profileWebsite';
import { ProfileIsPrivate } from '../../../src/profile/domain/valueObject/profileIsPrivate';
import { User } from '../../../src/user/domain/user';
import { UserMother } from '../../user/domain/userMother';

export class ProfileMother {
  public static create(
    profileId: ProfileId,
    profileUsername: ProfileUsername,
    profileBiography: ProfileBiography,
    profilePhotoUrl: ProfilePhotoUrl,
    profileWebsite: ProfileWebsite,
    profileIsPrivate: ProfileIsPrivate,
    user: User,
  ) {
    return new Profile(
      profileId,
      profileUsername,
      profileBiography,
      profilePhotoUrl,
      profileWebsite,
      profileIsPrivate,
      user,
    );
  }

  public static random(): Profile {
    return new Profile(
      ProfileIdMother.create(),
      ProfileUsernameMother.random(),
      ProfileBiographyMother.random(),
      ProfilePhotoUrlMother.random(),
      ProfileWebsiteMother.random(),
      ProfileIsPrivateMother.random(),
      UserMother.random(),
    );
  }
}
