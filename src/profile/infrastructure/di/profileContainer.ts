import { ContainerModule, interfaces } from 'inversify';
import { profileTypes } from './profileTypes';
import { AllProfiles } from '../../domain/allProfiles';
import { PgAllProfiles } from '../persistence/pgAllProfiles';
import { ProfileCreator } from '../../application/create/profileCreator';

const profileContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<AllProfiles>(profileTypes.allProfiles).to(PgAllProfiles);
  bind<ProfileCreator>(profileTypes.profileCreator).to(ProfileCreator);
});

export {
  profileContainer,
};
