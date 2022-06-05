import {InvalidParam} from "../../../Shared/Domain/Exceptions/InvalidParam";
import {StringValueObject} from "../../../Shared/Domain/ValueObject/StringValueObject";

export class UserName extends StringValueObject {
    constructor(value: string) {
        if (!value)
            throw new InvalidParam(value, UserName.name);
        super(value);
    }
}
