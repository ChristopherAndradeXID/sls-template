import { Profile } from './profile';

export interface AllProfiles {
  save(profile: Profile): Promise<void>;
}
