import {User} from "../User";
import {UserRepository} from "../UserRepository";
import {UserAlreadyRegisterException} from "../UserAlreadyRegisterException";

export class CreateUser {
    constructor(private readonly userRepository: UserRepository) {
    }

    public async run(user: User) {
        const userAlreadyRegister = await this.userRepository.withId(user.id);

        if (userAlreadyRegister)
            throw new UserAlreadyRegisterException();

        await this.userRepository.save(user);

        return user;
    }
}
