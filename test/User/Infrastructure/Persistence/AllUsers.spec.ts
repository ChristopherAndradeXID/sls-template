import {AllUserStub} from "../../mocks/AllUserStub";
import {UserIdMother} from "../../Domain/UserIdMother";

const allUserStub = new AllUserStub();

describe('AllUsers repository should', () => {
    test('Get and user with uuid: c5c9da35-a45c-4c5f-9293-510b0c48dbdb', async () => {
        const user = await allUserStub.withId(UserIdMother.create('c5c9da35-a45c-4c5f-9293-510b0c48dbdb'));
        expect(user).not.toBeUndefined();
        expect(user.id.value).toEqual('c5c9da35-a45c-4c5f-9293-510b0c48dbdb');
    });
});
