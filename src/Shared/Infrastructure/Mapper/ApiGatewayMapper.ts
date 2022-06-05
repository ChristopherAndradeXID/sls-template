import { Response } from '../../Domain/Response';
import { ApiGatewayResponse } from '../../Domain/Dto/ApiGatewayResponse';

export class ApiGatewayMapper {
  public static from<T>(response: Response<T>) {
    const { statusCode, body } = response.json();
    return new ApiGatewayResponse(statusCode, body);
  }
}
