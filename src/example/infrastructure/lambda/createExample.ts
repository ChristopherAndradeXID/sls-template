import 'reflect-metadata';
import { getRepository } from 'typeorm';
import { LambdaResponse } from '../../../shared/domain/lambdaResponse';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';
import { HttpResponse } from '../../../shared/infrastructure/httpResponse';

async function handler(event: any): Promise<LambdaResponse> {
  try {
    return HttpResponse.json(HttpStatusCode.OK, {
      ok: event,
    });
  } catch (e: any) {
    return HttpResponse.fromException(e);
  }
}

export {
  handler,
};
