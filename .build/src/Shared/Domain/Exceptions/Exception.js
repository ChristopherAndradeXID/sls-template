"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
var Exception = /** @class */ (function () {
    function Exception(name, message) {
        this.name = name;
        this.message = message;
        console.error(this.name, this.message);
    }
    return Exception;
}());
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map