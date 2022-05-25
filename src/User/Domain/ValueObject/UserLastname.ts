import {StringValueObject} from "../../../Shared/Domain/ValueObject/StringValueObject";
import {InvalidParamException} from "../../../Shared/Domain/Exceptions/InvalidParamException";

export class UserLastname extends StringValueObject {
    constructor(value: string) {
        if (!value)
            throw new InvalidParamException(value, UserLastname.name);
        super(value);
    }
}
