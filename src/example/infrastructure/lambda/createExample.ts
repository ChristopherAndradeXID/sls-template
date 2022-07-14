import 'reflect-metadata';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { Container } from 'typedi';
import { CreateExample } from '../../application/createExample';
import { Example } from '../../domain/example';
import { LambdaResponse } from '../../../shared/domain/lambdaResponse';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';

export async function CreateExampleHandler(event: APIGatewayProxyEvent): Promise<LambdaResponse> {
  const body = JSON.parse(event.body!);
  const createExample = Container.get(CreateExample);
  console.log(createExample);
  await createExample.run(Example.fromPrimitives(body.id));
  return {
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify({
      ok: 'chi',
    }),
  };
}
