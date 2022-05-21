import {Response} from "../Response";
import {StatusCode} from "../StatusCode";

export class SuccessResponse<T> extends Response<T> {
    constructor(body: T) {
        super(StatusCode.OK, body);
    }
}
