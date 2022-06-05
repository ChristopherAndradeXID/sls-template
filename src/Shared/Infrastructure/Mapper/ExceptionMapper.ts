import {Exception} from "../../Domain/Exceptions/Exception";
import {ApplicationError} from "../../Domain/Dto/ApplicationError";
import {ApiGatewayMapper} from "./ApiGatewayMapper";
import {ErrorPayload} from "../../Domain/Dto/ErrorPayload";

export class ExceptionMapper {
    public static from(exception: any | Exception) {
        if (exception instanceof Exception)
            return ApiGatewayMapper.from<ErrorPayload>(exception.toErrorResponse());
        return ApiGatewayMapper.from<ErrorPayload>(new ApplicationError());
    }
}
