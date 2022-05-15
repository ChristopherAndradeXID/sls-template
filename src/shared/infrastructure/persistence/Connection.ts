import {Pool, PoolClient} from "pg";
import {ApplicationException} from "../../domain/exceptions/ApplicationException";

export class Connection {
    private pool!: Pool;
    private poolClient!: PoolClient;

    constructor() {
       try {
           this.pool = new Pool({
               user: 'postgres',
               password: '123456',
               database: 'SLS',
               port: 5432,
           });
       } catch (e) {
           throw new ApplicationException(e);
       }
    }

    public async getConnection(): Promise<PoolClient> {
        try {
            if (!this.poolClient)
                this.poolClient = await this.pool.connect();
            return this.poolClient;
        } catch (e) {
            throw new ApplicationException(e);
        }
    }
}
