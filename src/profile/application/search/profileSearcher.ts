import { inject, injectable } from 'inversify';
import { FilterOperator } from '../../../shared/domain/criteria/filterOperator';
import { AllProfiles } from '../../domain/allProfiles';
import { profileTypes } from '../../infrastructure/di/profileTypes';
import { Criteria } from '../../../shared/domain/criteria/criteria';
import { Profile } from '../../domain/profile';
import { Filters } from '../../../shared/domain/criteria/filters';
import { Filter } from '../../../shared/domain/criteria/filter';

@injectable()
export class ProfileSearcher {
  constructor(@inject(profileTypes.allProfiles) private readonly allProfiles: AllProfiles) {
  }

  public async run(username: string): Promise<Profile | null> {
    const filters = new Filters([
      Filter.fromValues('username', FilterOperator.EQUALS, username),
    ]);

    const criteria = new Criteria(filters);

    return this.allProfiles.searchByCriteria(criteria);
  }
}
