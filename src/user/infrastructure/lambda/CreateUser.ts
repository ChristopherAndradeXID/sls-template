import {parse} from "query-string";
import {CreateUser} from "../../application/create/CreateUser";
import {PostgresRepository} from "../persistence/PostgresRepository";
import {Connection} from "../../../shared/infrastructure/persistence/Connection";
import {ExceptionMapper} from "../../../shared/infrastructure/mapper/ExceptionMapper";
import {ApiGatewayMapper} from "../../../shared/infrastructure/mapper/ApiGatewayMapper";
import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {User} from "../../domain/User";

const connection = new Connection();

export async function handler(event: APIGatewayProxyEvent, context: Context) {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        const poolClient = await connection.getConnection();
        const postgresRepository = new PostgresRepository(poolClient)

        const body = parse(event.body!);
        const createUser = new CreateUser(postgresRepository);

        const response = await createUser.run(
            String(body.id),
            String(body.name),
            String(body.lastname)
        );

        return ApiGatewayMapper.from<User>(response);
    } catch (exception) {
        return ExceptionMapper.from(exception);
    }
}
