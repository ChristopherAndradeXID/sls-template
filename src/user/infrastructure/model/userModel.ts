import {
  Column, Entity, JoinColumn, OneToOne, PrimaryColumn,
} from 'typeorm';
import { User } from '../../domain/user';
import { ProfileModel } from '../../../profile/infrastructure/model/profileModel';

@Entity({
  name: 'Users',
})
export class UserModel {
  @PrimaryColumn({
    unique: true,
  })
  public id!: string;

  @Column()
  public name!: string;

  @Column()
  public lastname!: string;

  @OneToOne(() => ProfileModel)
  @JoinColumn()
  public profile!: ProfileModel;

  public static from(user: User): UserModel {
    const { id, userName, lastname } = user.toPrimitives();
    const userModel = new UserModel();

    userModel.id = id;
    userModel.name = userName;
    userModel.lastname = lastname;

    return userModel;
  }
}
