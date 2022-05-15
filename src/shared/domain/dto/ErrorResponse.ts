import { StatusCode } from "../StatusCode";

export interface ErrorResponse {
    code: StatusCode;
    message: string;
}
