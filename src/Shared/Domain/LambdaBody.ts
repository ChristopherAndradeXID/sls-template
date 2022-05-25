import {StatusCode} from "./StatusCode";

export interface LambdaBody {
    statusCode: StatusCode;
    body: string;
}
