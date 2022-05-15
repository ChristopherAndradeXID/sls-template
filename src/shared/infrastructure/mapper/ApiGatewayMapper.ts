import {Response} from "../../domain/Response";
import {ApiGatewayResponse} from "../../domain/dto/ApiGatewayResponse";

export class ApiGatewayMapper {
    public static from<T>(response: Response<T>) {
        const {statusCode, body} = response.json();
        return new ApiGatewayResponse(statusCode, body);
    }
}
