import {
  Column, Entity, JoinColumn, OneToOne, PrimaryColumn,
} from 'typeorm';
import { User } from '../../domain/user';
import { ProfileModel } from '../../../profile/infrastructure/model/profileModel';
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

  @OneToOne(() => ProfileModel, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn()
  public profile!: ProfileModel;

  public static from(user: User): UserModel {
    const {
      id, name, lastname, profile,
    } = user.toPrimitives();

    const userModel = new UserModel();

    userModel.id = id;
    userModel.name = name;
    userModel.lastname = lastname;
    userModel.profile = profile;

    return userModel;
  }
}
