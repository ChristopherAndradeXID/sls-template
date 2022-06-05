import { Exception } from './Exception';
import { Response } from '../Response';
import { ErrorPayload } from '../Dto/ErrorPayload';
import { ApplicationError } from '../Dto/ApplicationError';

export class InternalServerError extends Exception {
  constructor(error: Error) {
    super(error.name, error.message);
  }

  toErrorResponse(): Response<ErrorPayload> {
    return new ApplicationError();
  }
}
