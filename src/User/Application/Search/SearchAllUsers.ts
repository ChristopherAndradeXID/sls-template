import {UserRepository} from "../../Domain/UserRepository";
import {SuccessResponse} from "../../../Shared/Domain/Http/SuccessResponse";

export class SearchAllUsers {
    constructor(private readonly userRepository: UserRepository) {
    }

    public async run() {
        const users = await this.userRepository.getAll();
        return new SuccessResponse(users);
    }
}
