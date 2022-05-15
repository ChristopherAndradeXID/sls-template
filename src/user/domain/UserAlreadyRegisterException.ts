import {Exception} from "../../shared/domain/exceptions/Exception";
import {ConflictResponse} from "../../shared/domain/dto/ConflictResponse";
import {Response} from "../../shared/domain/Response";
import {ErrorResponse} from "../../shared/domain/dto/ErrorResponse";

export class UserAlreadyRegisterException extends Exception {
    constructor() {
        super('User already register', 'this user id is already in use');
    }

    toErrorResponse(): Response<ErrorResponse> {
        return new ConflictResponse('User already register');
    }
}
