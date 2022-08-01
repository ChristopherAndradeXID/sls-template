import { UserMother } from '../domain/userMother';
import { container } from '../../../src/container';
import { ConnectionManager } from '../../../src/shared/infrastructure/connectionManager';
import { sharedTypes } from '../../../src/shared/infrastructure/di/sharedTypes';
import { AllUsers } from '../../../src/user/domain/allUsers';
import { userTypes } from '../../../src/user/infrastructure/di/userTypes';
import { UserIdMother } from '../domain/userIdMother';
import { UserNameMother } from '../domain/userNameMother';
import { UserLastnameMother } from '../domain/userLastnameMother';
import { ProfileMother } from '../../profile/domain/profileMother';
import { AllProfiles } from '../../../src/profile/domain/allProfiles';
import { profileTypes } from '../../../src/profile/infrastructure/di/profileTypes';

const givenProfile = ProfileMother.random();

const givenUser = UserMother.create(
  UserIdMother.create(),
  UserNameMother.random(),
  UserLastnameMother.random(),
  ProfileMother.random(),
);

const connection = container.get<ConnectionManager>(sharedTypes.connection);
const allUsers = container.get<AllUsers>(userTypes.allUsers);
const allProfiles = container.get<AllProfiles>(profileTypes.allProfiles);

describe('AllUsers', () => {
  beforeAll(async () => {
    await connection.open();
  });

  afterAll(async () => {
    await allUsers.remove(givenUser.id);
    await connection.close();
  });

  beforeEach(async () => {
    await allProfiles.save(givenProfile);
    await allUsers.save(givenUser);
  });

  it('Debera buscar un usuario por ID', async () => {
    const user = await allUsers.search(givenUser.id);
    expect(user).toEqual(givenUser);
  });
});
