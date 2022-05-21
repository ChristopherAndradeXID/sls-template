import {parse} from "query-string";
import {CreateUser} from "../../Application/Create/CreateUser";
import {PostgresRepository} from "../Persistence/PostgresRepository";
import {PostgresClient} from "../../../Shared/Infrastructure/Persistence/PostgresClient";
import {ExceptionMapper} from "../../../Shared/Infrastructure/Mapper/ExceptionMapper";
import {ApiGatewayMapper} from "../../../Shared/Infrastructure/Mapper/ApiGatewayMapper";
import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {User} from "../../Domain/User";

const connection = new PostgresClient();

export async function handler(event: APIGatewayProxyEvent, context: Context) {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        const postgresRepository = new PostgresRepository(connection);

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
