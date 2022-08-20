import {
  Column, Entity, JoinColumn, OneToOne, PrimaryColumn,
} from 'typeorm';
import { ProfileBiography } from '../../domain/valueObject/profileBiography';
import { Profile } from '../../domain/profile';
import { UserModel } from '../../../user/infrastructure/model/userModel';
import { ProfilePrimitive } from '../../domain/profilePrimitive';

@Entity({
  name: 'Profile',
})
export class ProfileModel implements ProfilePrimitive {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  public id!: string;

  @Column({
    name: 'biography',
    type: 'varchar',
    length: ProfileBiography.MAX_BIOGRAPHY_LENGTH,
    default: '',
    nullable: false,
  })
  public biography!: string;

  @Column({
    name: 'isPrivate',
    type: 'boolean',
    default: false,
    nullable: false,
  })
  public isPrivate!: boolean;

  @Column({
    name: 'photoUrl',
    type: 'varchar',
    nullable: false,
  })
  public photoUrl!: string;

  @Column({
    name: 'username',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  public username!: string;

  @Column({
    name: 'website',
    type: 'varchar',
    default: '',
  })
  public website!: string;

  @OneToOne(() => UserModel, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn()
  public user!: UserModel;

  public static from(profile: Profile): ProfileModel {
    const profileModel = new ProfileModel();
    profileModel.id = profile.id.value;
    profileModel.website = profile.website.value;
    profileModel.isPrivate = profile.isPrivate.value;
    profileModel.biography = profile.biography.value;
    profileModel.username = profile.username.value;
    profileModel.photoUrl = profile.photoUrl.value;
    profileModel.user = UserModel.from(profile.user);
    return profileModel;
  }
}
