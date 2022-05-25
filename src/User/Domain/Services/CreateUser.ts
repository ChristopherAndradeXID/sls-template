import {User} from "../User";
import {AllUsers} from "../AllUsers";
import {UserAlreadyRegisterException} from "../UserAlreadyRegisterException";

export class CreateUser {
    constructor(private readonly userRepository: AllUsers) {
    }

    public async run(user: User) {
        const userAlreadyRegister = await this.userRepository.withId(user.id);

        if (userAlreadyRegister)
            throw new UserAlreadyRegisterException();

        await this.userRepository.save(user);

        return user;
    }
}
