import {JSONBody} from "../JSONBody";
import {Response} from "../Response";
import {ErrorPayload} from "../Dto/ErrorPayload";

export abstract class Exception {
    protected constructor(
        private readonly name: string,
        private readonly message: string,
    ) {
        console.error(this.name, this.message);
    }

    abstract toErrorResponse(): Response<ErrorPayload>;
}
