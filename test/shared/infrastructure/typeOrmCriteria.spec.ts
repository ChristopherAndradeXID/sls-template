import { Criteria } from '../../../src/shared/domain/criteria/criteria';
import { Filters } from '../../../src/shared/domain/criteria/filters';
import { Filter } from '../../../src/shared/domain/criteria/filter';
import { TypeOrmCriteriaConverter } from '../../../src/shared/infrastructure/typeOrmCriteriaConverter';
import { FilterOperator } from '../../../src/shared/domain/criteria/filterOperator';
import { container } from '../../../src/container';
import { AllProfiles } from '../../../src/profile/domain/allProfiles';
import { profileTypes } from '../../../src/profile/infrastructure/di/profileTypes';
import { sharedTypes } from '../../../src/shared/infrastructure/di/sharedTypes';
import { ConnectionManager } from '../../../src/shared/infrastructure/connectionManager';
import { ProfileMother } from '../../profile/domain/profileMother';

const profile = ProfileMother.random();

const connection = container.get<ConnectionManager>(sharedTypes.connection);
const allProfiles = container.get<AllProfiles>(profileTypes.allProfiles);

describe('TypeormCriteria', () => {
  beforeAll(async () => {
    await connection.open();
    await allProfiles.save(profile);
  });

  afterAll(async () => {
    await allProfiles.remove(profile.id);
    await connection.close();
  });

  it('Debera recuperar un registro usando la búsqueda por criteria', async () => {
    const result = await allProfiles.searchByCriteria(Criteria.create(Filters.create([
      Filter.fromValues('username', FilterOperator.EQUALS, profile.username.value),
    ])));

    expect(result).toEqual(profile);
  });

  it('Debera crear un query valido', () => {
    const typeOrmAdapter = new TypeOrmCriteriaConverter();

    const criteria = Criteria.create(Filters.create(
      [
        Filter.fromValues('username', FilterOperator.EQUALS, 'christophergerardy778'),
        Filter.fromValues('name', FilterOperator.EQUALS, 'christopher'),
      ],
    ));

    const result = typeOrmAdapter.convert(criteria);

    expect(result).toEqual({
      query: 'username = :username AND name = :name',
      data: { username: 'christophergerardy778', name: 'christopher' },
    });
  });
});
