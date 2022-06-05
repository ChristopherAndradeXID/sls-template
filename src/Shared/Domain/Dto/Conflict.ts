import {Response} from "../Response";
import {ErrorPayload} from "./ErrorPayload";
import {StatusCode} from "../StatusCode";

export class Conflict extends Response<ErrorPayload> {
    constructor(message: string) {
        super(StatusCode.CONFLICT, {
            message,
            code: StatusCode.CONFLICT,
        });
    }
}
