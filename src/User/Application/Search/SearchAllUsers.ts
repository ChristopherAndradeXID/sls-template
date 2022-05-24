import {AllUsers} from "../../Domain/AllUsers";
import {SuccessResponse} from "../../../Shared/Domain/Http/SuccessResponse";
import {UserId} from "../../Domain/ValueObject/UserId";

export class SearchAllUsers {
    constructor(private readonly userRepository: AllUsers) {
    }

    public async run() {
        const users = await this.userRepository.withId(new UserId("f8c9648b-5523-44de-84c5-830caa998a01"));
        return new SuccessResponse(users);
    }
}
