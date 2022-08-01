import { Entity } from 'typeorm';
import { UserId } from './valueObject/userId';
import { UserName } from './valueObject/userName';
import { UserLastname } from './valueObject/userLastname';
import { Profile } from '../../profile/domain/profile';
import { UserPrimitive } from './userPrimitive';

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
  ): User {
    return new this(id, userName, userLastName, profile);
  }

  static fromPrimitives(userPrimitive: UserPrimitive): User {
    return new User(
      new UserId(userPrimitive.id),
      new UserName(userPrimitive.name),
      new UserLastname(userPrimitive.lastname),
      Profile.fromPrimitives(userPrimitive.profile),
    );
  }

  toPrimitives(): UserPrimitive {
    return {
      id: this.id.value,
      name: this.userName.value,
      lastname: this.userLastName.value,
      profile: this.profile.toPrimitives(),
    };
  }
}
