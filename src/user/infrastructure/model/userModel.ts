import { Column, Entity, PrimaryColumn } from 'typeorm';
import { User } from '../../domain/user';
import { UserPrimitive } from '../../domain/userPrimitive';

@Entity({
  name: 'Users',
})
export class UserModel implements UserPrimitive {
  @PrimaryColumn({
    unique: true,
  })
  public id!: string;

  @Column()
  public name!: string;

  @Column()
  public lastname!: string;

  public static from(user: User): UserModel {
    const {
      id, name, lastname,
    } = user.toPrimitives();

    const userModel = new UserModel();

    userModel.id = id;
    userModel.name = name;
    userModel.lastname = lastname;

    return userModel;
  }
}
