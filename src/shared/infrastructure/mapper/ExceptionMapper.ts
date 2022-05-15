import {Exception} from "../../domain/exceptions/Exception";
import {InternalServerErrorResponse} from "../../domain/dto/InternalServerErrorResponse";
import {ApiGatewayMapper} from "./ApiGatewayMapper";
import {ErrorResponse} from "../../domain/dto/ErrorResponse";

export class ExceptionMapper {
    public static from(exception: any | Exception) {
        if (exception instanceof Exception)
            return ApiGatewayMapper.from<ErrorResponse>(exception.toErrorResponse());
        return ApiGatewayMapper.from<ErrorResponse>(new InternalServerErrorResponse());
    }
}
