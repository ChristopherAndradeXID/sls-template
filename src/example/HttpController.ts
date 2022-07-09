import { HandlerClass } from '../../types/handlerClass';
import { ErrorMap } from './ErrorMap';

export abstract class HttpController {
  private readonly errorMap: ErrorMap = new ErrorMap();

  abstract registerExceptions(): void;

  register(key: string, Handler: HandlerClass<Handler>) {
    this.errorMap.register(key, Handler);
    return this;
  }

  pull(error: Error) {
    return this.errorMap.execute(error);
  }
}
