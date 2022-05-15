import {JSONBody} from "../JSONBody";
import {Response} from "../Response";
import {ErrorResponse} from "../dto/ErrorResponse";

export abstract class Exception {
    protected constructor(
        private readonly name: string,
        private readonly message: string,
    ) {
        console.error(this.name, this.message);
    }

    abstract toErrorResponse(): Response<ErrorResponse>;
}
