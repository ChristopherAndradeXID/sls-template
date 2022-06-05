import {Response} from "../Response";
import {StatusCode} from "../StatusCode";

export class ApiGatewayResponse<T> extends Response<string> {
    constructor(statusCode: StatusCode, body: T) {
        super(statusCode, JSON.stringify(body));
    }
}
