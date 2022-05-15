import { ErrorResponse } from "./ErrorResponse";
import { Response } from "../Response";
import { StatusCode } from "../StatusCode";

export class BadRequestResponse extends Response<ErrorResponse> {
    constructor() {
        super(StatusCode.BAD_REQUEST, {
            code: StatusCode.BAD_REQUEST,
            message: 'BAD REQUEST',
        });
    }
}
