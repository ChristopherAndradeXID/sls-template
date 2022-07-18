import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UserId } from './valueObject/userId';
import { UserName } from './valueObject/userName';
import { UserLastname } from './valueObject/userLastname';

@Entity()
export class User {
  @PrimaryColumn({
    type: 'varchar',
  })
  public id!: UserId;

  @Column({
    type: 'varchar',
  })
  public userName!: UserName;

  @Column({
    type: 'varchar',
  })
  public userLastName!: UserLastname;

  private constructor(
    id: UserId,
    userName: UserName,
    userLastName: UserLastname,
  ) {
    this.id = id;
    this.userLastName = userLastName;
    this.userName = userName;
  }

  public static create(id: UserId, userName: UserName, userLastName: UserLastname) {
    return new this(id, userName, userLastName);
  }

  static fromPrimitives(id: string, userName: string, userLastName: string): User {
    return new this(
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
