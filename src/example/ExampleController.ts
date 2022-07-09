import { HttpController } from './HttpController';
import { InvalidParam } from '../shared/domain/invalidParam';

export class ExampleController extends HttpController {
  registerExceptions(): void {
    this.register(InvalidParam.name, );
  }
}
