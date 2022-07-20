import { Entity } from 'typeorm';
import { UserId } from './valueObject/userId';
import { UserName } from './valueObject/userName';
import { UserLastname } from './valueObject/userLastname';

@Entity()
export class User {
  private constructor(
    public id: UserId,
    public userName: UserName,
    public userLastName: UserLastname,
  ) {
    this.id = id;
    this.userLastName = userLastName;
    this.userName = userName;
  }

  public static create(id: UserId, userName: UserName, userLastName: UserLastname) {
    return new this(id, userName, userLastName);
  }

  static fromPrimitives(id: string, userName: string, userLastName: string): User {
    return new User(
      new UserId(id),
      new UserName(userName),
      new UserLastname(userLastName),
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      userName: this.userName.value,
      lastname: this.userLastName.value,
    };
  }
}
