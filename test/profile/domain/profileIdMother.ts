import { v4 as uuid } from 'uuid';
import { ProfileId } from '../../../src/profile/domain/valueObject/profileId';

export class ProfileIdMother {
  public static create(): ProfileId {
    return new ProfileId(uuid());
  }
}
