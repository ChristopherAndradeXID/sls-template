import {JSONBody} from "../JSONBody";
import {Response} from "../Response";
import {ErrorResponse} from "../Http/ErrorResponse";

export abstract class Exception {
    protected constructor(
        private readonly name: string,
        private readonly message: string,
    ) {
        console.error(this.name, this.message);
    }

    abstract toErrorResponse(): Response<ErrorResponse>;
}
