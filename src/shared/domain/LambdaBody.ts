import { StatusCode } from './statusCode';

export interface LambdaBody {
  statusCode: StatusCode;
  body: string;
}
