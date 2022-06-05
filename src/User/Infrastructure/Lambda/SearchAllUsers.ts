import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { SearchAllUsers } from '../../Application/Search/SearchAllUsers';
import { PostgresClient } from '../../../Shared/Infrastructure/Persistence/PostgresClient';
import { PostgresAllUsers } from '../Persistence/PostgresAllUsers';
import { ExceptionMapper } from '../../../Shared/Infrastructure/Mapper/ExceptionMapper';
import { ApiGatewayMapper } from '../../../Shared/Infrastructure/Mapper/ApiGatewayMapper';
import { User } from '../../Domain/User';
import { Exception } from '../../../Shared/Domain/Exceptions/Exception';

const connection = new PostgresClient();

export async function handler(event: APIGatewayProxyEvent, context: Context) {
  try {
    context.callbackWaitsForEmptyEventLoop = false;

    const postgresRepository = new PostgresAllUsers(connection);
    const searchAllUsers = new SearchAllUsers(postgresRepository);

    const response = await searchAllUsers.run();

    return ApiGatewayMapper.from<User>(response);
  } catch (exception: any & Exception) {
    return ExceptionMapper.from(exception);
  }
}
