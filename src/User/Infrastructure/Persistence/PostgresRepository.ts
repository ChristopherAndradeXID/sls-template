import {UserRepository} from "../../Domain/UserRepository";
import {User} from "../../Domain/User";
import {UserId} from "../../Domain/ValueObject/UserId";
import {PostgresClient} from "../../../Shared/Infrastructure/Persistence/PostgresClient";

export class PostgresRepository implements UserRepository {
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
        const query = await this.postgresClient.query('SELECT id from "Users" where id = $1', [
            userId.value
        ]);
        return query.rows[0];
    }
}
