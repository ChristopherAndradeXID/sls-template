import { Success } from '../../Domain/Dto/Success';
import { ApiGatewayMapper } from '../Mapper/ApiGatewayMapper';

let counter = 0;

export async function handler() {
  counter++;
  const response = new Success({ ok: counter });
  return ApiGatewayMapper.from(response);
}
