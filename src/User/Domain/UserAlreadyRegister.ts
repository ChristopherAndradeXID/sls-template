import {Exception} from "../../Shared/Domain/Exceptions/Exception";
import {Conflict} from "../../Shared/Domain/Dto/Conflict";
import {Response} from "../../Shared/Domain/Response";
import {ErrorPayload} from "../../Shared/Domain/Dto/ErrorPayload";

export class UserAlreadyRegister extends Exception {
    constructor() {
        super('User already register', 'this user id is already in use');
    }

    toErrorResponse(): Response<ErrorPayload> {
        return new Conflict('User already register');
    }
}
