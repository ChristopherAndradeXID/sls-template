import {InvalidParamException} from "../../shared/domain/exceptions/InvalidParamException";

export class UserName {
    readonly value: string

    constructor(value: string) {
        if (!value)
            throw new InvalidParamException(value, UserName.name);
        this.value = value;
    }

    toString() {
        return this.value;
    }
}
