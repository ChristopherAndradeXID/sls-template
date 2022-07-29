import { inject, injectable } from 'inversify';
import { FilterOperator } from '../../../shared/domain/criteria/filterOperator';
import { AllProfiles } from '../../domain/allProfiles';
import { profileTypes } from '../../infrastructure/di/profileTypes';
import { Criteria } from '../../../shared/domain/criteria/criteria';
import { Profile } from '../../domain/profile';

@injectable()
export class ProfileSearcher {
  constructor(@inject(profileTypes.allProfiles) private readonly allProfiles: AllProfiles) {
  }

  public async run(username: string): Promise<Profile | null> {
    const criteria = new Criteria();
    criteria.add('username', FilterOperator.EQUALS, username);
    return this.allProfiles.searchByCriteria(criteria);
  }
}
