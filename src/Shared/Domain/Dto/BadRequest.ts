import { ErrorPayload } from './ErrorPayload';
import { Response } from '../Response';
import { StatusCode } from '../StatusCode';

export class BadRequest extends Response<ErrorPayload> {
  constructor() {
    super(StatusCode.BAD_REQUEST, {
      code: StatusCode.BAD_REQUEST,
      message: 'BAD REQUEST',
    });
  }
}
