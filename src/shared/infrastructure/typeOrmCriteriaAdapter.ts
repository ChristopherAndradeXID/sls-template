import { Criteria } from '../domain/criteria/criteria';
import { Filter } from '../domain/criteria/filter';

export class TypeOrmCriteriaAdapter {
  private queryValues: string[] = [];

  public convert(entityName: string, criteria: Criteria) {
    if (criteria.hasFilters()) {
      const filters = criteria.getFilters();

      filters.forEach((filter: Filter, index: number) => {
        this.pushQuery(TypeOrmCriteriaAdapter.parseQuery(entityName, filter), index);
      });
    }

    return this.queryValues.join(' ');
  }

  private static parseQuery(entityName: string, filter: Filter) {
    return `${entityName}.${filter.field.value} ${filter.filterOperator} :${filter.field.value}`;
  }

  private pushQuery(query: string, index: number) {
    if (index === 0) {
      this.queryValues.push(query);
    } else {
      this.queryValues.push(`AND ${query}`);
    }
  }
}
