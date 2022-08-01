import { ProfileMother } from '../../domain/profileMother';
import { container } from '../../../../src/container';
import { ConnectionManager } from '../../../../src/shared/infrastructure/connectionManager';
import { sharedTypes } from '../../../../src/shared/infrastructure/di/sharedTypes';
import { AllProfiles } from '../../../../src/profile/domain/allProfiles';
import { profileTypes } from '../../../../src/profile/infrastructure/di/profileTypes';
import { Criteria } from '../../../../src/shared/domain/criteria/criteria';
import { Filters } from '../../../../src/shared/domain/criteria/filters';
import { Filter } from '../../../../src/shared/domain/criteria/filter';
import { FilterOperator } from '../../../../src/shared/domain/criteria/filterOperator';

const givenProfile = ProfileMother.random();
const connection = container.get<ConnectionManager>(sharedTypes.connection);
const allProfiles = container.get<AllProfiles>(profileTypes.allProfiles);

describe('AllProfiles', () => {
  beforeAll(async () => {
    await connection.open();
    await allProfiles.save(givenProfile);
  });

  afterEach(async () => {
    await allProfiles.remove(givenProfile.id);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Debera buscar un perfil usando el nombre como criterio', async () => {
    const result = await allProfiles.searchByCriteria(Criteria.create(Filters.create([
      Filter.fromValues('username', FilterOperator.EQUALS, givenProfile.username.value),
    ])));

    expect(result).toEqual(givenProfile);
  });

  it('Debera eliminar un perfil con determinado ID', async () => {
    const givenProfileToDelete = ProfileMother.random();
    await allProfiles.save(givenProfileToDelete);
    await allProfiles.remove(givenProfileToDelete.id);
    const profileFromDb = await allProfiles.find(givenProfileToDelete.id);
    expect(profileFromDb).toEqual(null);
  });

  it('Debera crear un nuevo perfil', async () => {
    await allProfiles.save(givenProfile);
    const profileInDb = await allProfiles.find(givenProfile.id);
    expect(profileInDb).toEqual(givenProfile);
  });
});
