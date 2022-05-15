import {UserRepository} from "../../domain/UserRepository";
import {SuccessResponse} from "../../../shared/domain/dto/SuccessResponse";

export class SearchAllUsers {
    constructor(private readonly userRepository: UserRepository) {
    }

    public async run() {
        const users = await this.userRepository.getAll();
        return new SuccessResponse(users);
    }
}
