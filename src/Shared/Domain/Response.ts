import { StatusCode } from './StatusCode';
import { JSONBody } from './JSONBody';

export abstract class Response<T> {
  protected constructor(
    protected readonly statusCode: StatusCode,
    protected readonly body: T,
  ) {
  }

  json(): JSONBody<T> {
    return {
      statusCode: this.statusCode,
      body: this.body,
    };
  }
}
