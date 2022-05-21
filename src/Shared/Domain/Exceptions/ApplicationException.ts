import {Exception} from "./Exception";
import {Response} from "../Response";
import {ErrorResponse} from "../Http/ErrorResponse";
import {InternalServerErrorResponse} from "../Http/InternalServerErrorResponse";

export class ApplicationException extends Exception {
    constructor(error: Error) {
        super(error.name, error.message);
    }

    toErrorResponse(): Response<ErrorResponse> {
        return new InternalServerErrorResponse();
    }
}
