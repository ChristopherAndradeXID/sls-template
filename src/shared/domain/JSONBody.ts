import { StatusCode } from './statusCode';

export interface JSONBody<T> {
  statusCode: StatusCode;
  body: T;
}
