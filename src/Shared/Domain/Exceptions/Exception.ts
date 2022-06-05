import { Response } from '../Response';
import { ErrorPayload } from '../Dto/ErrorPayload';

export abstract class Exception {
  protected constructor(
    private readonly name: string,
    private readonly message: string,
  ) {
    // eslint-disable-next-line no-console
    console.error(this.name, this.message);
  }

  abstract toErrorResponse(): Response<ErrorPayload>;
}
