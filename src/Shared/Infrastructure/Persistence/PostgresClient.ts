import {Client} from "pg";
import {ApplicationException} from "../../Domain/Exceptions/ApplicationException";

export class PostgresClient {

    private client: Client = new Client({
        user: 'postgres',
        password: '123456',
        database: 'SLS',
        port: 5432,
    });

    constructor() {
        this.connect();
    }

    private connect(): void {
        this.client.connect(exception => {
            if (exception) throw new ApplicationException(exception);
        });
    }

    public query(sqlQuery: string, values?: any[]) {
        return this.client.query<any>(sqlQuery, values);
    }

    public async close() {
        await this.client.end();
    }
}
