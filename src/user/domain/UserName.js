"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserName = void 0;
var InvalidParamException_1 = require("../../shared/domain/exceptions/InvalidParamException");
var UserName = /** @class */ (function () {
    function UserName(value) {
        if (!value)
            throw new InvalidParamException_1.InvalidParamException(value, UserName.name);
        this.value = value;
    }
    UserName.prototype.toString = function () {
        return this.value;
    };
    return UserName;
}());
exports.UserName = UserName;
//# sourceMappingURL=UserName.js.map