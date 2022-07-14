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
exports.InvalidParam = void 0;
var exception_1 = require("./exception");
var httpStatusCode_1 = require("./httpStatusCode");
var InvalidParam = /** @class */ (function (_super) {
    __extends(InvalidParam, _super);
    function InvalidParam(value, field) {
        var _this = _super.call(this, httpStatusCode_1.HttpStatusCode.BAD_REQUEST, "".concat(value, " is an invalid value for ").concat(field)) || this;
        _this.value = value;
        _this.field = field;
        _this.name = InvalidParam.name;
        return _this;
    }
    return InvalidParam;
}(exception_1.Exception));
exports.InvalidParam = InvalidParam;
//# sourceMappingURL=invalidParam.js.map