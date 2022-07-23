import { inject, injectable } from 'inversify';
import { AllProfiles } from '../../domain/allProfiles';
import { Profile } from '../../domain/profile';
import { profileTypes } from '../../infrastructure/di/profileTypes';

@injectable()
export class ProfileCreator {
  constructor(@inject(profileTypes.allProfiles) private readonly allProfiles: AllProfiles) {
  }

  public async run(profile: Profile): Promise<void> {
    await this.allProfiles.save(profile);
  }
}
