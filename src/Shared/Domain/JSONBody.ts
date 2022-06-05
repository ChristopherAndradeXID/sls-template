import { StatusCode } from './StatusCode';

export interface JSONBody<T> {
  statusCode: StatusCode;
  body: T;
}
