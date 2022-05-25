import {Response} from "../Response";
import {ErrorResponse} from "./ErrorResponse";
import {StatusCode} from "../StatusCode";

export class ConflictResponse extends Response<ErrorResponse> {
    constructor(message: string) {
        super(StatusCode.CONFLICT, {
            message,
            code: StatusCode.CONFLICT,
        });
    }
}
