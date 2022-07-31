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

  async save(profile: Profile): Promise<void> {
    await this.connection
      .getRepository(ProfileModel)
      .insert(ProfileModel.from(profile));
  }

  async searchByCriteria(criteria: Criteria): Promise<Profile | null> {
    const converter = new TypeOrmCriteriaConverter();
    const output = converter.convert(criteria);

    const result = await this.connection.getRepository(ProfileModel)
      .createQueryBuilder('Profile')
      .select('*')
      .limit(1)
      .where(output.query, output.data)
      .execute();

    if (!result) {
      return null;
    }

    return Profile.fromPrimitives(result[0]);
  }

  async remove(id: Profile['id']): Promise<void> {
    await this.connection.getRepository(ProfileModel).delete({
      id: id.value,
    });
  }
}
