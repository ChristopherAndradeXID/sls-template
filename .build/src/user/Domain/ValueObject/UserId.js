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
exports.UserId = void 0;
var uuid_1 = require("uuid");
var InvalidParamException_1 = require("../../../Shared/Domain/Exceptions/InvalidParamException");
var StringValueObject_1 = require("../../../Shared/Domain/ValueObject/StringValueObject");
var UserId = /** @class */ (function (_super) {
    __extends(UserId, _super);
    function UserId(value) {
        if (!(0, uuid_1.validate)(value))
            throw new InvalidParamException_1.InvalidParamException(value, UserId.name);
        return _super.call(this, value) || this;
    }
    return UserId;
}(StringValueObject_1.StringValueObject));
exports.UserId = UserId;
//# sourceMappingURL=UserId.js.map