import { Entity } from 'typeorm';
import { UserId } from './valueObject/userId';
import { UserName } from './valueObject/userName';
import { UserLastname } from './valueObject/userLastname';
import { Profile } from '../../profile/domain/profile';
import { ProfilePrimitive } from '../../profile/domain/profilePrimitive';

@Entity()
export class User {
  private constructor(
    public id: UserId,
    public userName: UserName,
    public userLastName: UserLastname,
    public profile: Profile,
  ) {
    this.id = id;
    this.userLastName = userLastName;
    this.userName = userName;
  }

  public static create(
    id: UserId,
    userName: UserName,
    userLastName: UserLastname,
    profile: Profile,
  ) {
    return new this(id, userName, userLastName, profile);
  }

  static fromPrimitives(
    id: string,
    userName: string,
    userLastName: string,
    profile: ProfilePrimitive,
  ): User {
    return new User(
      new UserId(id),
      new UserName(userName),
      new UserLastname(userLastName),
      Profile.fromPrimitives(profile),
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      userName: this.userName.value,
      lastname: this.userLastName.value,
      profile: this.profile.toPrimitives(),
    };
  }
}
