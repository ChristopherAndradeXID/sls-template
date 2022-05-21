import {UserRepository} from "../../Domain/UserRepository";
import {User} from "../../Domain/User";
import {UserId} from "../../Domain/ValueObject/UserId";

export class InMemoryRepository implements UserRepository {
    async createUser(user: User): Promise<void> {

    }

    async getAll(): Promise<User[]> {
        return [
            User.fromPrimitives('2323','Chris', 'Gerardy'),
            User.fromPrimitives('2323','Chris', 'Gerardy'),
            User.fromPrimitives('2323','Chris', 'Gerardy'),
            User.fromPrimitives('2323','Chris', 'Gerardy'),
        ];
    }

    userAlreadyExists(userId: UserId): Promise<boolean> {
        return Promise.resolve(false);
    }

}
