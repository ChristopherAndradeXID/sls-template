// eslint-disable-next-line import/no-import-module-exports
import { APIGatewayProxyEvent } from 'aws-lambda';

// eslint-disable-next-line import/prefer-default-export
export async function handler(event: APIGatewayProxyEvent) {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v3.0! Your function executed successfully!',
      input: event,
    }),
  };

  return response;
}
