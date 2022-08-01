import { Profile } from './profile';
import { Criteria } from '../../shared/domain/criteria/criteria';

export interface AllProfiles {
  save(profile: Profile): Promise<void>;
  find(id: Profile['id']): Promise<Profile | null>;
  searchByCriteria(criteria: Criteria): Promise<Profile | null>;
  remove(id: Profile['id']): Promise<void>;
}
