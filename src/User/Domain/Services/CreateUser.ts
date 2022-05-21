import {UserRepository} from "../UserRepository";
import {User} from "../User";
import {UserAlreadyRegisterException} from "../UserAlreadyRegisterException";

export class CreateUser {
    constructor(private readonly userRepository: UserRepository) {
    }

    public async run(user: User) {
        const userAlreadyRegister = await this.userRepository.userAlreadyExists(user.id);

        if (userAlreadyRegister)
            throw new UserAlreadyRegisterException();

        await this.userRepository.createUser(user);

        return user;
    }
}
