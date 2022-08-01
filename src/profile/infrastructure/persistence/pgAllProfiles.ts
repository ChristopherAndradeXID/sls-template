import { inject, injectable } from 'inversify';
import { AllProfiles } from '../../domain/allProfiles';
import { sharedTypes } from '../../../shared/infrastructure/di/sharedTypes';
import { ConnectionManager } from '../../../shared/infrastructure/connectionManager';
import { Profile } from '../../domain/profile';
import { ProfileModel } from '../model/profileModel';
import { Criteria } from '../../../shared/domain/criteria/criteria';
import { TypeOrmCriteriaConverter } from '../../../shared/infrastructure/typeOrmCriteriaConverter';

@injectable()
export class PgAllProfiles implements AllProfiles {
  constructor(@inject(sharedTypes.connection) private readonly connection: ConnectionManager) {
  }

  private static castProfileIfNotNull(profileModel: ProfileModel | null) {
    if (profileModel === null) {
      return null;
    }

    return Profile.fromPrimitives(profileModel);
  }

  async save(profile: Profile): Promise<void> {
    await this.connection
      .getRepository(ProfileModel)
      .save(ProfileModel.from(profile));
  }

  async searchByCriteria(criteria: Criteria): Promise<Profile | null> {
    const converter = new TypeOrmCriteriaConverter();
    const output = converter.convert(criteria);

    const result = await this.connection.getRepository(ProfileModel)
      .createQueryBuilder()
      .where(output.query, output.data)
      .getOne();

    return PgAllProfiles.castProfileIfNotNull(result);
  }

  async remove(id: Profile['id']): Promise<void> {
    await this.connection.getRepository(ProfileModel).delete({
      id: id.value,
    });
  }

  async find(id: Profile['id']): Promise<Profile | null> {
    const result = await this.connection.getRepository(ProfileModel).findOneBy({
      id: id.value,
    });

    return PgAllProfiles.castProfileIfNotNull(result);
  }
}
