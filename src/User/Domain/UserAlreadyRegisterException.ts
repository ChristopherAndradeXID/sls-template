import {Exception} from "../../Shared/Domain/Exceptions/Exception";
import {ConflictResponse} from "../../Shared/Domain/Http/ConflictResponse";
import {Response} from "../../Shared/Domain/Response";
import {ErrorResponse} from "../../Shared/Domain/Http/ErrorResponse";

export class UserAlreadyRegisterException extends Exception {
    constructor() {
        super('User already register', 'this user id is already in use');
    }

    toErrorResponse(): Response<ErrorResponse> {
        return new ConflictResponse('User already register');
    }
}
