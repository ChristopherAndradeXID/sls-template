import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';
import { InvalidParam } from '../../../shared/domain/invalidParam';

export class UserLastname extends StringValueObject {
  constructor(value: string) {
    if (!value) {
      throw new InvalidParam(value, UserLastname.name);
    }
    super(value);
  }
}
