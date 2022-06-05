import {Response} from "../Response";
import {StatusCode} from "../StatusCode";

export class Success<T> extends Response<T> {
    constructor(body: T) {
        super(StatusCode.OK, body);
    }
}
