import {SearchAllUsers} from "../../Application/Search/SearchAllUsers";
import {PostgresClient} from "../../../Shared/Infrastructure/Persistence/PostgresClient";
import {PostgresRepository} from "../Persistence/PostgresRepository";
import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {Exception} from "../../../Shared/Domain/Exceptions/Exception";
import {ExceptionMapper} from "../../../Shared/Infrastructure/Mapper/ExceptionMapper";
import {ApiGatewayMapper} from "../../../Shared/Infrastructure/Mapper/ApiGatewayMapper";
import {User} from "../../Domain/User";

const connection = new PostgresClient();

export async function handler(event: APIGatewayProxyEvent, context: Context) {
    try {
        context.callbackWaitsForEmptyEventLoop = false;

        const postgresRepository = new PostgresRepository(connection);
        const searchAllUsers = new SearchAllUsers(postgresRepository);

        const response = await searchAllUsers.run();

        return ApiGatewayMapper.from<User[]>(response);

    } catch (exception: any | Exception) {
        return ExceptionMapper.from(exception);
    }
}
