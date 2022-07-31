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

const profile = ProfileMother.random();
const connection = container.get<ConnectionManager>(sharedTypes.connection);
const allProfiles = container.get<AllProfiles>(profileTypes.allProfiles);

describe('AllProfiles', () => {
  beforeAll(async () => {
    await connection.open();
    await allProfiles.save(profile);
  });

  afterAll(async () => {
    await allProfiles.remove(profile.id);
    await connection.close();
  });

  it('Debera buscar un perfil usando el nombre como criterio', async () => {
    const result = await allProfiles.searchByCriteria(Criteria.create(Filters.create([
      Filter.fromValues('username', FilterOperator.EQUALS, profile.username.value),
    ])));

    expect(result).toEqual(profile);
  });
});
