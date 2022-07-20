import { injectable } from 'inversify';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { UserModel } from '../../../user/infrastructure/model/userModel';

@injectable()
export class Connection {
  private dbSource!: DataSource;

  constructor() {
    this.dbSource = new DataSource({
      database: 'example',
      password: '123456',
      port: 5432,
      username: 'postgres',
      synchronize: true,
      type: 'postgres',
      entities: [UserModel],
    });
  }

  public async open() {
    await this.dbSource.initialize();
  }

  getRepository<T>(entity: EntityTarget<T>): Repository<T> {
    return this.dbSource.getRepository(entity);
  }

  async close() {
    await this.dbSource.destroy();
  }
}
