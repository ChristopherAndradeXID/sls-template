import { injectable } from 'inversify';
import { APIGatewayProxyEvent } from 'aws-lambda';

// eslint-disable-next-line import/no-cycle

interface LambdaEvent<T> extends Omit<APIGatewayProxyEvent, 'body'> {
  body: T,
}

@injectable()
export class Tomino {
  // eslint-disable-next-line class-methods-use-this

}
