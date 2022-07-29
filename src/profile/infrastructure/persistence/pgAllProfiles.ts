import { inject, injectable } from 'inversify';
import { AllProfiles } from '../../domain/allProfiles';
import { sharedTypes } from '../../../shared/infrastructure/di/sharedTypes';
import { ConnectionManager } from '../../../shared/infrastructure/connectionManager';
import { Profile } from '../../domain/profile';
import { ProfileModel } from '../model/profileModel';
import { Criteria } from '../../../shared/domain/criteria/criteria';
import { Filter } from '../../../shared/domain/criteria/filter';

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

    if (!criteria.hasFilters()) {
      // TODO: WEBITO
    }

    let query = '';
    const filters = criteria.getFilters();

    filters.forEach((filter: Filter, index: number) => {
      if (index === 0) {
        query = query.concat(`${Profile.name}${filter.field.value} ${filter.filterOperator} = :${filter.field.value}`);
      }
    });

    const result = await this.connection.getRepository(Profile)
      .createQueryBuilder(Profile.name)
      .where('', {
        '': '2',
      });

    return null;
  }
}
