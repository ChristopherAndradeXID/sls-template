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
exports.InvalidParamException = void 0;
var Exception_1 = require("./Exception");
var BadRequestResponse_1 = require("../Http/BadRequestResponse");
var InvalidParamException = /** @class */ (function (_super) {
    __extends(InvalidParamException, _super);
    function InvalidParamException(value, field) {
        var _this = _super.call(this, InvalidParamException.name, "".concat(value, " invalid for field ").concat(field)) || this;
        _this.value = value;
        _this.field = field;
        return _this;
    }
    InvalidParamException.prototype.toErrorResponse = function () {
        return new BadRequestResponse_1.BadRequestResponse();
    };
    return InvalidParamException;
}(Exception_1.Exception));
exports.InvalidParamException = InvalidParamException;
//# sourceMappingURL=InvalidParamException.js.map