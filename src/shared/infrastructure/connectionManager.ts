import { injectable } from 'inversify';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { UserModel } from '../../user/infrastructure/model/userModel';
import { ProfileModel } from '../../profile/infrastructure/model/profileModel';

@injectable()
export class ConnectionManager {
  private dbSource!: DataSource;

  constructor() {
    this.dbSource = new DataSource({
      database: 'app',
      password: 'GEO699',
      port: 5432,
      username: 'postgres',
      synchronize: true,
      type: 'postgres',
      entities: [
        UserModel,
        ProfileModel,
      ],
    });
  }

  public async open() {
    if (!this.dbSource.isInitialized) {
      await this.dbSource.initialize();
    }
  }

  getRepository<T>(entity: EntityTarget<T>): Repository<T> {
    return this.dbSource.getRepository(entity);
  }

  async close() {
    await this.dbSource.destroy();
  }
}
