import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ProfilePrimitive } from '../../domain/profilePrimitive';
import { ProfileBiography } from '../../domain/valueObject/profileBiography';
import { Profile } from '../../domain/profile';

@Entity({
  name: 'Profile',
})
export class ProfileModel implements ProfilePrimitive {
  @PrimaryColumn({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  public id!: string;

  @Column({
    type: 'varchar',
    length: ProfileBiography.MAX_BIOGRAPHY_LENGTH,
    default: '',
    nullable: false,
  })
  public biography!: string;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  public isPrivate!: boolean;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public photoUrl!: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  public username!: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  public website!: string;

  public static from(profile: Profile): ProfileModel {
    const profileModel = new ProfileModel();
    profileModel.id = profile.id.value;
    profileModel.website = profile.website.value;
    profileModel.isPrivate = profile.isPrivate.value;
    profileModel.biography = profile.biography.value;
    profileModel.username = profile.username.value;
    profileModel.photoUrl = profile.photoUrl.value;
    return profileModel;
  }
}
