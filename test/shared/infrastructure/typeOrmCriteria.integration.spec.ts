import { Criteria } from '../../../src/shared/domain/criteria/criteria';
import { Filters } from '../../../src/shared/domain/criteria/filters';
import { Filter } from '../../../src/shared/domain/criteria/filter';
import { TypeOrmCriteriaConverter } from '../../../src/shared/infrastructure/typeOrmCriteriaConverter';
import { FilterOperator } from '../../../src/shared/domain/criteria/filterOperator';

describe('TypeormCriteria', () => {
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
