import {Response} from "../Response";
import {ErrorPayload} from "./ErrorPayload";
import {StatusCode} from "../StatusCode";

export class ApplicationError extends Response<ErrorPayload> {
    constructor() {
        super(StatusCode.INTERNAL_SERVER_ERROR, {
            code: StatusCode.INTERNAL_SERVER_ERROR,
            message: 'INTERNAL SERVER ERROR',
        });
    }
}
