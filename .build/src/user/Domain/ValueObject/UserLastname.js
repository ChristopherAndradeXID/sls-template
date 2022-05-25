"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLastname = void 0;
var StringValueObject_1 = require("../../../Shared/Domain/ValueObject/StringValueObject");
var InvalidParamException_1 = require("../../../Shared/Domain/Exceptions/InvalidParamException");
var UserLastname = /** @class */ (function (_super) {
    __extends(UserLastname, _super);
    function UserLastname(value) {
        if (!value)
            throw new InvalidParamException_1.InvalidParamException(value, UserLastname.name);
        return _super.call(this, value) || this;
    }
    return UserLastname;
}(StringValueObject_1.StringValueObject));
exports.UserLastname = UserLastname;
//# sourceMappingURL=UserLastname.js.map