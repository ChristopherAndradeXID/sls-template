import { FilterField } from './filterField';
import { FilterOperator } from './filterOperator';
import { FilterValue } from './filterValue';

export class Filter {
  constructor(
    public readonly field: FilterField,
    public readonly filterOperator: FilterOperator,
    public readonly filterValue: FilterValue,
  ) {
  }
}
