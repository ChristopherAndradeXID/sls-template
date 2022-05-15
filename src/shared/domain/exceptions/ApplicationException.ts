import {Exception} from "./Exception";
import {Response} from "../Response";
import {ErrorResponse} from "../dto/ErrorResponse";
import {InternalServerErrorResponse} from "../dto/InternalServerErrorResponse";

export class ApplicationException extends Exception {
    constructor(error: Error) {
        super(error.name, error.message);
    }

    toErrorResponse(): Response<ErrorResponse> {
        return new InternalServerErrorResponse();
    }
}
