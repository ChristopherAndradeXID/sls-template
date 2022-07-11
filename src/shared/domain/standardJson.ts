import { StatusCode } from './statusCode';

export interface StandardJson<T> {
  statusCode: StatusCode;
  body: T;
}
