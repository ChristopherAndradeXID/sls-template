import 'reflect-metadata';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { Context } from 'aws-lambda';
import { LambdaResponse } from '../../../shared/domain/lambdaResponse';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';
import { User } from '../../../user/domain/user';
import { container } from '../../../container';
import { AllExamples } from '../../domain/allExamples';
import { httpTypes } from '../di/httpExample';
import { ConnectionMiddyHandler } from '../../../shared/infrastructure/lambda/connectionMiddyHandler';

const repository = container.get<AllExamples>(httpTypes.allExamples);

async function CreateExampleHandler(event: any, context: Context): Promise<LambdaResponse> {
  context.callbackWaitsForEmptyEventLoop = false;

  await repository.createUser(User.fromPrimitives(
    event.body.id,
    event.body.name,
    event.body.lastname,
  ));

  return {
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify({
      ok: 'chi',
    }),
  };
}

const webito = middy(CreateExampleHandler)
  .use(httpJsonBodyParser());

const handler = ConnectionMiddyHandler(webito);

export {
  handler,
};
