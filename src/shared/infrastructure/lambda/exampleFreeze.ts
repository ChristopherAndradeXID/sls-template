import {SuccessResponse} from "../../domain/dto/SuccessResponse";
import {ApiGatewayMapper} from "../mapper/ApiGatewayMapper";

let counter = 0;

export async function handler() {
    counter++;
    const response = new SuccessResponse({ ok: counter });
    return ApiGatewayMapper.from(response);
}
