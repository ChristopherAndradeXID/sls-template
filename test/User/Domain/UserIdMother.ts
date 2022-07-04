import {UserId} from "../../../src/user/domain/ValueObject/UserId";
import {faker} from "@faker-js/faker";

export class UserIdMother {
    public static create(id: string) {
        return new UserId(id);
    }

    public static random() {
        return this.create(faker.datatype.uuid());
    }
}
