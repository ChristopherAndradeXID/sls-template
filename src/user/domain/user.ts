import { Entity } from 'typeorm';
import { UserId } from './valueObject/userId';
import { UserName } from './valueObject/userName';
import { UserLastname } from './valueObject/userLastname';
import { UserPrimitive } from './userPrimitive';
import { UserPassword } from './valueObject/userPassword';

@Entity()
export class User {
  private constructor(
    public id: UserId,
    public name: UserName,
    public lastname: UserLastname,
    public password: UserPassword,
  ) {
  }

  public static create(
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    password: UserPassword,
  ): User {
    return new this(id, name, lastname, password);
  }

  static fromPrimitives(userPrimitive: UserPrimitive): User {
    return new User(
      new UserId(userPrimitive.id),
      new UserName(userPrimitive.name),
      new UserLastname(userPrimitive.lastname),
      new UserPassword(userPrimitive.password),
    );
  }

  toPrimitives(): UserPrimitive {
    return {
      id: this.id.value,
      name: this.name.value,
      lastname: this.lastname.value,
      password: this.password.value,
    };
  }
}
