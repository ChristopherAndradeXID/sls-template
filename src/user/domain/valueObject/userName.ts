import { InvalidParam } from '../../../shared/domain/invalidParam';
import { StringValueObject } from '../../../shared/domain/valueObject/stringValueObject';

export class UserName extends StringValueObject {
  constructor(value: string) {
    if (!value) {
      throw new InvalidParam(value, UserName.name);
    }
    super(value);
  }
}
