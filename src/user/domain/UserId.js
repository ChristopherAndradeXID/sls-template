"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
var uuid_1 = require("uuid");
var InvalidParamException_1 = require("../../shared/domain/exceptions/InvalidParamException");
var UserId = /** @class */ (function () {
    function UserId(value) {
        if (!(0, uuid_1.validate)(value))
            throw new InvalidParamException_1.InvalidParamException(value, UserId.name);
        this.value = value;
    }
    return UserId;
}());
exports.UserId = UserId;
//# sourceMappingURL=UserId.js.map