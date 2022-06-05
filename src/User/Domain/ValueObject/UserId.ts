import { validate } from 'uuid';
import { InvalidParam } from '../../../Shared/Domain/Exceptions/InvalidParam';
import { StringValueObject } from '../../../Shared/Domain/ValueObject/StringValueObject';

export class UserId extends StringValueObject {
  constructor(value: string) {
    if (!validate(value)) throw new InvalidParam(value, UserId.name);
    super(value);
  }
}
