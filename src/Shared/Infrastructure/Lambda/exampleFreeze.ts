import {SuccessResponse} from "../../Domain/Http/SuccessResponse";
import {ApiGatewayMapper} from "../Mapper/ApiGatewayMapper";

let counter = 0;

export async function handler() {
    counter++;
    const response = new SuccessResponse({ ok: counter });
    return ApiGatewayMapper.from(response);
}
