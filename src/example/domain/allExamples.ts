import { Example } from './example';
import { User } from '../../user/domain/user';

export interface AllExamples {
  save(example: Example): void;
  createUser(user: User): Promise<void>;
}
