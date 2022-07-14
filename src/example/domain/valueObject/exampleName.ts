import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';
import { InvalidParam } from '../../../shared/domain/invalidParam';

export class ExampleName extends StringValueObject {
  constructor(value: string) {
    if (!value) {
      throw new InvalidParam(value, ExampleName.name);
    }
    super(value);
  }
}
