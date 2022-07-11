import { AllUsers } from '../../domain/allUsers';
import { Success } from '../../../shared/infrastructure/Dto/Success';
import { UserId } from '../../domain/valueObject/userId';

export class SearchAllUsers {
  constructor(private readonly userRepository: AllUsers) {
  }

  public async run() {
    const users = await this.userRepository.withId(new UserId('f8c9648b-5523-44de-84c5-830caa998a01'));
    return new Success(users);
  }
}