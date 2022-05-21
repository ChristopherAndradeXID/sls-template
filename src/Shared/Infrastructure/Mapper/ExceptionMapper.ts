import {Exception} from "../../Domain/Exceptions/Exception";
import {InternalServerErrorResponse} from "../../Domain/Http/InternalServerErrorResponse";
import {ApiGatewayMapper} from "./ApiGatewayMapper";
import {ErrorResponse} from "../../Domain/Http/ErrorResponse";

export class ExceptionMapper {
    public static from(exception: any | Exception) {
        if (exception instanceof Exception)
            return ApiGatewayMapper.from<ErrorResponse>(exception.toErrorResponse());
        return ApiGatewayMapper.from<ErrorResponse>(new InternalServerErrorResponse());
    }
}
