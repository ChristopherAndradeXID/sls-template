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
exports.UserAlreadyRegisterException = void 0;
var Exception_1 = require("../../Shared/Domain/Exceptions/Exception");
var ConflictResponse_1 = require("../../Shared/Domain/Http/ConflictResponse");
var UserAlreadyRegisterException = /** @class */ (function (_super) {
    __extends(UserAlreadyRegisterException, _super);
    function UserAlreadyRegisterException() {
        return _super.call(this, 'User already register', 'this user id is already in use') || this;
    }
    UserAlreadyRegisterException.prototype.toErrorResponse = function () {
        return new ConflictResponse_1.ConflictResponse('User already register');
    };
    return UserAlreadyRegisterException;
}(Exception_1.Exception));
exports.UserAlreadyRegisterException = UserAlreadyRegisterException;
//# sourceMappingURL=UserAlreadyRegisterException.js.map