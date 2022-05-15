import {UserRepository} from "../../domain/UserRepository";
import {User} from "../../domain/User";
import {PoolClient} from "pg";
import {UserId} from "../../domain/UserId";

export class PostgresRepository implements UserRepository {
    constructor(private readonly connection: PoolClient) {
    }

    async createUser(user: User): Promise<void> {
        await this.connection.query(`INSERT INTO "Users" VALUES ($1, $2, $3)`, [
            user.id.value,
            user.userName.value,
            user.userLastName.value,
        ]);
    }

    async getAll(): Promise<User[]> {
        const queryResult = await this.connection.query(`SELECT * FROM "Users"`);
        return queryResult.rows;
    }

    async userAlreadyExists(userId: UserId): Promise<boolean> {
        const query = await this.connection.query('SELECT id from "Users" where id = $1', [
            userId.value
        ]);

        return query.rowCount > 0;
    }
}
