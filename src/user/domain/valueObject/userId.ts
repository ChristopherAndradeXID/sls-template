import { validate } from 'uuid';
import { InvalidParam } from '../../../shared/domain/invalidParam';
import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';

export class UserId extends StringValueObject {
  constructor(value: string) {
    if (!validate(value)) {
      throw new InvalidParam(value, UserId.name);
    }
    super(value);
  }
}
