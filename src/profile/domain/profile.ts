import { ProfileId } from './valueObject/profileId';
import { ProfileWebsite } from './valueObject/profileWebsite';
import { ProfileBiography } from './valueObject/profileBiography';
import { ProfileUsername } from './valueObject/profileUsername';
import { ProfilePhotoUrl } from './valueObject/profilePhotoUrl';
import { ProfileIsPrivate } from './valueObject/profileIsPrivate';
import { ProfilePrimitive } from './profilePrimitive';

export class Profile {
  public static readonly PROFILE_DEFAULT_PHOTO_URL = 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif';

  constructor(
    public id: ProfileId,
    public username: ProfileUsername,
    public biography: ProfileBiography,
    public photoUrl: ProfilePhotoUrl,
    public website: ProfileWebsite,
    public isPrivate: ProfileIsPrivate,
  ) {
  }

  public static create(
    id: ProfileId,
    username: ProfileUsername,
    biography: ProfileBiography,
    photoUrl: ProfilePhotoUrl,
    website: ProfileWebsite,
    isPrivate: ProfileIsPrivate,
  ): Profile {
    return new Profile(id, username, biography, photoUrl, website, isPrivate);
  }

  public static fromPrimitives({
    id,
    username,
    biography,
    photoUrl,
    website,
    isPrivate,
  }: ProfilePrimitive): Profile {
    return this.create(
      new ProfileId(id),
      new ProfileUsername(username),
      new ProfileBiography(biography),
      new ProfilePhotoUrl(photoUrl),
      new ProfileWebsite(website),
      new ProfileIsPrivate(isPrivate),
    );
  }

  public hasBiography() {
    return this.biography.value.length !== 0;
  }

  public toPrimitives(): ProfilePrimitive {
    return {
      id: this.id.value,
      username: this.username.value,
      website: this.website.value,
      photoUrl: this.photoUrl.value,
      biography: this.biography.value,
      isPrivate: this.isPrivate.value,
    };
  }
}
