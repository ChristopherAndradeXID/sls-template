import { validate } from "uuid";
import {InvalidParamException} from "../../shared/domain/exceptions/InvalidParamException";

export class UserId {
    readonly value: string

    constructor(value: string) {
        if (!validate(value))
            throw new InvalidParamException(value, UserId.name);
        this.value = value;
    }
}
