import { HttpResponse } from './HttpResponse';

export interface ErrorHandler {
  execute(): HttpResponse;
}
