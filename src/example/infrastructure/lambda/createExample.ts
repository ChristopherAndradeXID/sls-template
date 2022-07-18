import 'reflect-metadata';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { Context } from 'aws-lambda';
import { LambdaResponse } from '../../../shared/domain/lambdaResponse';
import { Connection } from '../../../shared/infrastructure/connection/Connection';
import { User } from '../../../user/domain/user';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';
import { UserId } from '../../../user/domain/valueObject/userId';
import { UserName } from '../../../user/domain/valueObject/userName';
import { UserLastname } from '../../../user/domain/valueObject/userLastname';

/* function domainValidationMiddleWare() {
  return {
    before(request: any) {
    },
  };
} */

// eslint-disable-next-line max-len
async function CreateExampleHandler(event: any, context: Context): Promise<LambdaResponse> {
  context.callbackWaitsForEmptyEventLoop = false;
  const connection = await Connection.getConnection();

  const user = await connection.getRepository(User).find();
  await connection.getRepository(User).save(User.create(
    new UserId(event.body.id),
    new UserName(event.body.userName),
    new UserLastname(event.body.lastname),
  ).toPrimitives());

  connection.close();

  return {
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify({
      ok: 'chi',
      user,
    }),
  };
}

const handler = middy(CreateExampleHandler)
  .use(httpJsonBodyParser());
// .use(domainValidationMiddleWare());

export {
  handler,
};
