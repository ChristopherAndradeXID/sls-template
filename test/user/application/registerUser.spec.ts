import { RegisterUser } from '../../../src/user/application/create/registerUser';
import { UserCreator } from '../../../src/user/application/create/userCreator';
import { AllUsersMock } from '../mock/allUsersMock';
import { ProfileCreator } from '../../../src/profile/application/create/profileCreator';
import { AllProfilesMock } from '../../profile/mocks/allProfilesMock';
import { ProfileMother } from '../../profile/domain/profileMother';

const allUsers = new AllUsersMock();
const allProfiles = new AllProfilesMock();

const userCreator = new UserCreator(allUsers);
const profileCreator = new ProfileCreator(allProfiles);

describe('Registro de usuarios', () => {
  it('Debera crear un usuario con un perfil', () => {
    const registerUser = new RegisterUser(userCreator, profileCreator);
    const profile = ProfileMother.random();

    registerUser.run(profile.user, profile);
  });
});
