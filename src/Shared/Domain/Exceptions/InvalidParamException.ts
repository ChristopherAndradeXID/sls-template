import {Exception} from "./Exception";
import {Response} from "../Response";
import {ErrorResponse} from "../Http/ErrorResponse";
import {BadRequestResponse} from "../Http/BadRequestResponse";

export class InvalidParamException extends Exception {
    constructor(protected value: any, protected field: string) {
        super(
            InvalidParamException.name,
            `${value} invalid for field ${field}`
        );
    }

    toErrorResponse(): Response<ErrorResponse> {
        return new BadRequestResponse();
    }
}
