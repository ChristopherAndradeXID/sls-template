import { injectable } from 'inversify';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { User } from '../../../user/domain/user';

@injectable()
export class Connection {
  private dbSource!: DataSource;

  constructor(dbSource: DataSource) {
    this.dbSource = dbSource;
  }

  public static async getConnection() {
    const dbSource = new DataSource({
      database: 'example',
      password: 'GEO699',
      port: 5432,
      username: 'Chris',
      synchronize: false,
      type: 'postgres',
      entities: [User],
    });

    const dataSource = await dbSource.initialize();
    return new Connection(dataSource);
  }

  getRepository<T>(entity: EntityTarget<T>): Repository<T> {
    return this.dbSource.getRepository(entity);
  }

  async close() {
    await this.dbSource.destroy();
  }
}
