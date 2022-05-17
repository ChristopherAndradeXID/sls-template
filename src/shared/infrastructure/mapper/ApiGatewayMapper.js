"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayMapper = void 0;
var ApiGatewayResponse_1 = require("../../domain/dto/ApiGatewayResponse");
var ApiGatewayMapper = /** @class */ (function () {
    function ApiGatewayMapper() {
    }
    ApiGatewayMapper.from = function (response) {
        var _a = response.json(), statusCode = _a.statusCode, body = _a.body;
        return new ApiGatewayResponse_1.ApiGatewayResponse(statusCode, body);
    };
    return ApiGatewayMapper;
}());
exports.ApiGatewayMapper = ApiGatewayMapper;
//# sourceMappingURL=ApiGatewayMapper.js.map