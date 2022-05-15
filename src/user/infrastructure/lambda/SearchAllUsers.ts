import {SearchAllUsers} from "../../application/search/SearchAllUsers";
import {Connection} from "../../../shared/infrastructure/persistence/Connection";
import {PostgresRepository} from "../persistence/PostgresRepository";
import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {Exception} from "../../../shared/domain/exceptions/Exception";
import {ExceptionMapper} from "../../../shared/infrastructure/mapper/ExceptionMapper";
import {ApiGatewayMapper} from "../../../shared/infrastructure/mapper/ApiGatewayMapper";
import {User} from "../../domain/User";

const connection = new Connection();

export async function handler(event: APIGatewayProxyEvent, context: Context) {
    try {
        context.callbackWaitsForEmptyEventLoop = false;

        const poolClient = await connection.getConnection();

        const postgresRepository = new PostgresRepository(poolClient);
        const searchAllUsers = new SearchAllUsers(postgresRepository);

        const response = await searchAllUsers.run();

        return ApiGatewayMapper.from<User[]>(response);

    } catch (exception: any | Exception) {
        return ExceptionMapper.from(exception);
    }
}
