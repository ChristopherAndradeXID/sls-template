import { inject, injectable } from 'inversify';
import { AllProfiles } from '../../domain/allProfiles';
import { sharedTypes } from '../../../shared/infrastructure/di/sharedTypes';
import { Connection } from '../../../shared/infrastructure/connection/Connection';
import { Profile } from '../../domain/profile';
import { ProfileModel } from '../model/profileModel';

@injectable()
export class PgAllProfiles implements AllProfiles {
  constructor(@inject(sharedTypes.connection) private readonly connection: Connection) {
  }

  async save(profile: Profile): Promise<void> {
    await this.connection
      .getRepository(ProfileModel)
      .insert(ProfileModel.from(profile));
  }
}
