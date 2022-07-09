// eslint-disable-next-line max-classes-per-file
import { InvalidParam } from '../shared/domain/invalidParam';
import { LambdaBody } from '../shared/domain/LambdaBody';
import { StatusCode } from '../shared/domain/statusCode';
import { HandlerClass } from '../../types/handlerClass';

interface Handler {
  run(): LambdaBody;
}

class Handly implements Handler {
  // eslint-disable-next-line class-methods-use-this
  run(): LambdaBody {
    return {
      body: '',
      statusCode: StatusCode.BAD_REQUEST,
    };
  }
}

export class ErrorMap {
  errors = new Map<string, HandlerClass<Handler>>();

  register(key: string, Handler: HandlerClass<Handler>) {
    this.errors.set(key, Handler);
    return this;
  }

  execute(error: Error): LambdaBody {
    if (!this.errors.has(error.name)) {
      throw new Error('');
    }

    const Handler: HandlerClass<Handler> = this.errors.get(error.name)!;

    const h = new Handler();

    return h.run();
  }
}

abstract class HttpController {
  private readonly errorMap: ErrorMap = new ErrorMap();

  abstract register(): void;

  push(key: string, Handler: HandlerClass<Handler>) {
    this.errorMap.register(key, Handler);
    return this;
  }

  pull(error: Error) {
    return this.errorMap.execute(error);
  }
}

class GetAllUsersController extends HttpController {
  register(): void {
    this.push(InvalidParam.name, Handly)
      .push(InvalidParam.name, Handly)
      .push(InvalidParam.name, Handly)
      .push(InvalidParam.name, Handly)
      .push(InvalidParam.name, Handly);
  }

  run() {
    try {
      console.log('');
    } catch (e) {
      return this.pull(e);
    }
  }
}
