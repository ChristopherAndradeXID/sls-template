import {AllUsers} from "../../Domain/AllUsers";
import {User} from "../../Domain/User";
import {UserId} from "../../Domain/ValueObject/UserId";
import {PostgresClient} from "../../../Shared/Infrastructure/Persistence/PostgresClient";

export class PostgresAllUsers implements AllUsers {
    constructor(private readonly postgresClient: PostgresClient) {
    }

    async save(user: User): Promise<void> {
        await this.postgresClient.query(`INSERT INTO "Users" VALUES ($1, $2, $3)`, [
            user.id.value,
            user.userName.value,
            user.userLastName.value,
        ]);
    }

    async withId(userId: UserId): Promise<User> {
        const query = await this.postgresClient.query('SELECT * from "Users" where id = $1', [
            userId.value
        ]);

        const result = query.rows[0];

        return User.fromPrimitives(
            result["id"],
            result["name"],
            result["lastname"],
        );
    }
}
