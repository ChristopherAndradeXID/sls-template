import {StringValueObject} from "../../../Shared/Domain/ValueObject/StringValueObject";
import {InvalidParam} from "../../../Shared/Domain/Exceptions/InvalidParam";

export class UserLastname extends StringValueObject {
    constructor(value: string) {
        if (!value)
            throw new InvalidParam(value, UserLastname.name);
        super(value);
    }
}
