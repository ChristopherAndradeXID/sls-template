import {Exception} from "./Exception";
import {Response} from "../Response";
import {ErrorPayload} from "../Dto/ErrorPayload";
import {BadRequest} from "../Dto/BadRequest";

export class InvalidParam extends Exception {
    constructor(protected value: any, protected field: string) {
        super(
            InvalidParam.name,
            `${value} invalid for field ${field}`
        );
    }

    toErrorResponse(): Response<ErrorPayload> {
        return new BadRequest();
    }
}
