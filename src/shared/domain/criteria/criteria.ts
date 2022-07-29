import { Filters } from './filters';
import { Filter } from './filter';

export class Criteria {
  constructor(private readonly filters: Filters) {
  }

  public getFilters(): Filter[] {
    return this.filters.filters;
  }

  public hasFilters(): boolean {
    return !this.filters.isEmpty();
  }
}
