import { StatusCode } from './statusCode';

export abstract class Response<T> {
  protected constructor(
    protected readonly statusCode: StatusCode,
    protected readonly body: T,
  ) {
  }
}
