import {User} from "../../domain/User";
import {UserRepository} from "../../domain/UserRepository";
import {SuccessResponse} from "../../../shared/domain/dto/SuccessResponse";
import {CreateUser as DomainCreateUser} from "../../domain/CreateUser";

export class CreateUser {
    private createUser!: DomainCreateUser;

    constructor(private readonly userRepository: UserRepository) {
        this.createUser = new DomainCreateUser(userRepository);
    }

    public async run(id: string, userName: string, lastname: string) {
        const data = await this.createUser.run(User.fromPrimitives(id, userName, lastname));
        return new SuccessResponse<User>(data);
    }
}
