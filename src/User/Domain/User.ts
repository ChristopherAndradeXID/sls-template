import {UserId} from "./ValueObject/UserId";
import {UserName} from "./ValueObject/UserName";
import {UserLastname} from "./ValueObject/UserLastname";

export class User {
    private constructor(
        public id: UserId,
        public userName: UserName,
        public userLastName: UserLastname,
    ) {
    }

    public static create(id: UserId, userName: UserName, userLastName: UserLastname) {
        return new this(id, userName, userLastName);
    }

    static fromPrimitives(id: string, userName: string, userLastName: string): User {
        return new this(
            new UserId(id),
            new UserName(userName),
            new UserLastname(userLastName),
        );
    }

    toPrimitives() {
        return {
            id: this.id.value,
            userName: this.userName.value,
            lastname: this.userLastName.value
        }
    }
}
