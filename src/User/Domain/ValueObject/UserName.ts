import {InvalidParamException} from "../../../Shared/Domain/Exceptions/InvalidParamException";
import {StringValueObject} from "../../../Shared/Domain/ValueObject/StringValueObject";

export class UserName extends StringValueObject {
    constructor(value: string) {
        if (!value)
            throw new InvalidParamException(value, UserName.name);
        super(value);
    }
}
