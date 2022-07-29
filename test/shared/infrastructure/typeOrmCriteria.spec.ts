import { Criteria } from '../../../src/shared/domain/criteria/criteria';
import { Filters } from '../../../src/shared/domain/criteria/filters';
import { Filter } from '../../../src/shared/domain/criteria/filter';
import { TypeOrmCriteriaAdapter } from '../../../src/shared/infrastructure/typeOrmCriteriaAdapter';
import { Profile } from '../../../src/profile/domain/profile';
import { FilterOperator } from '../../../src/shared/domain/criteria/filterOperator';
import { ConnectionManager } from '../../../src/shared/infrastructure/connectionManager';
import { ProfileModel } from '../../../src/profile/infrastructure/model/profileModel';

const typeOrmAdapter = new TypeOrmCriteriaAdapter();
const connection = new ConnectionManager();

describe('TypeormCriteria', () => {
  beforeAll(async () => {
    await connection.open();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Debera crear un sql valido', async () => {
    const filter = Filter.fromValues('username', FilterOperator.EQUALS, 'christophergerardy778');
    const filters = new Filters([
      filter,
    ]);

    const criteria = new Criteria(filters);

    const result = typeOrmAdapter.convert(Profile.name, criteria);

    const dbQuery = connection.getRepository(ProfileModel)
      .createQueryBuilder(ProfileModel.name)
      .where(`${Profile.name}.username = :${filter.field.value}`)
      .getQuery();

    const queryArray = dbQuery.split(' ');
    const index = queryArray.indexOf('WHERE');

    const typeOrmValidQuery = queryArray.splice(index + 1, queryArray.length).join(' ');
    expect(result).toEqual(typeOrmValidQuery);
  });
});
