import { validate } from "uuid";
import {InvalidParamException} from "../../../Shared/Domain/Exceptions/InvalidParamException";
import {StringValueObject} from "../../../Shared/Domain/ValueObject/StringValueObject";

export class UserId extends StringValueObject{
    constructor(value: string) {
        if (!validate(value))
            throw new InvalidParamException(value, UserId.name);
        super(value)
    }
}
