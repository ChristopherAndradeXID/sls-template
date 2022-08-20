import { ContainerModule, interfaces } from 'inversify';
import { profileTypes } from './profileTypes';
import { AllProfiles } from '../../domain/allProfiles';
import { PgAllProfiles } from '../persistence/pgAllProfiles';
import { ProfileCreator } from '../../application/create/profileCreator';
import { ProfileSearcher } from '../../application/search/profileSearcher';

const profileContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<AllProfiles>(profileTypes.allProfiles).to(PgAllProfiles);
  bind<ProfileCreator>(profileTypes.profileCreator).to(ProfileCreator);
  bind<ProfileSearcher>(profileTypes.profileSearcher).to(ProfileSearcher);
});

export {
  profileContainer,
};
