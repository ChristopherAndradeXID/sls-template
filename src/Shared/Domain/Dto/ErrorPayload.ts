import { StatusCode } from '../StatusCode';

export interface ErrorPayload {
  code: StatusCode;
  message: string;
}
