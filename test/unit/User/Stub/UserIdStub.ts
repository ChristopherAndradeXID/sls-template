import {UserId} from "../../../../src/User/Domain/ValueObject/UserId";
import {faker} from "@faker-js/faker";

export class UserIdStub {
    public static create(id: string) {
        return new UserId(id);
    }

    public static random() {
        return this.create(faker.datatype.uuid())
    }
}
