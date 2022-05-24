"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
var Response = /** @class */ (function () {
    function Response(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }
    Response.prototype.json = function () {
        return {
            statusCode: this.statusCode,
            body: this.body,
        };
    };
    return Response;
}());
exports.Response = Response;
//# sourceMappingURL=Response.js.map