import {UserId} from "./UserId";
import {UserName} from "./UserName";

export class User {
    private constructor(
        public id: UserId,
        public userName: UserName,
        public userLastName: UserName,
    ) {
    }

    public static create(id: UserId, userName: UserName, userLastName: UserName) {
        return new this(id, userName, userLastName);
    }

    static fromPrimitives(id: string, userName: string, userLastName: string): User {
        return new this(
            new UserId(id),
            new UserName(userName),
            new UserName(userLastName),
        );
    }

    toObject() {
        return {
            id: this.id.value,
            userName: this.id.value,
        }
    }
}
