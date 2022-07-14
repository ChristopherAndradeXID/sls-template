import 'reflect-metadata';
import { APIGatewayProxyEvent } from 'aws-lambda';
import Ajv from 'ajv';
import { CreateExample } from '../../application/createExample';
import { Example } from '../../domain/example';
import { LambdaResponse } from '../../../shared/domain/lambdaResponse';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';
import { container } from '../../../container';
import { httpTypes } from '../di/httpExample';

const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  required: ['id'],
  additionalProperties: false,
};

export async function CreateExampleHandler(event: APIGatewayProxyEvent): Promise<LambdaResponse> {
  const body = JSON.parse(event.body!);

  console.log(ajv.validate(schema, body));

  const createExample = container.get<CreateExample>(httpTypes.createExample);

  await createExample.run(Example.fromPrimitives(body.id));

  return {
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify({
      ok: 'chi',
    }),
  };
}
