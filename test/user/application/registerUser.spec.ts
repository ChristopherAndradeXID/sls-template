import { UserNameMother } from '../domain/userNameMother';
import { UserLastnameMother } from '../domain/userLastnameMother';
import { ProfileUsernameMother } from '../../profile/domain/profileUsernameMother';
import { RegisterUser } from '../../../src/user/application/create/registerUser';
import { UserCreator } from '../../../src/user/application/create/userCreator';
import { AllUsersMock } from '../mock/allUsersMock';
import { ProfileCreator } from '../../../src/profile/application/create/profileCreator';

describe('Registro de usuarios', () => {
  it('Debera crear un usuario con un perfil', () => {
    const name = UserNameMother.create('Christopher Gerardy');
    const lastname = UserLastnameMother.create('Andrade Lazcano');
    const username = ProfileUsernameMother.create('christophergerardy778');

    const allUsers = new AllUsersMock();

    const userCreator = new UserCreator(allUsers);
    const profileCreator = new ProfileCreator();

    const registerUser = new RegisterUser(userCreator, profileCreator);

    registerUser.run(name, lastname, username);
  });
});
