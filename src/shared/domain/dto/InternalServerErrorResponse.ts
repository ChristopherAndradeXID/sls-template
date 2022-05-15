import {Response} from "../Response";
import {ErrorResponse} from "./ErrorResponse";
import {StatusCode} from "../StatusCode";

export class InternalServerErrorResponse extends Response<ErrorResponse> {
    constructor() {
        super(StatusCode.INTERNAL_SERVER_ERROR, {
            code: StatusCode.INTERNAL_SERVER_ERROR,
            message: 'INTERNAL SERVER ERROR',
        });
    }
}
