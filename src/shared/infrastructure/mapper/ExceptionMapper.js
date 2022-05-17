"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionMapper = void 0;
var Exception_1 = require("../../domain/exceptions/Exception");
var InternalServerErrorResponse_1 = require("../../domain/dto/InternalServerErrorResponse");
var ApiGatewayMapper_1 = require("./ApiGatewayMapper");
var ExceptionMapper = /** @class */ (function () {
    function ExceptionMapper() {
    }
    ExceptionMapper.from = function (exception) {
        if (exception instanceof Exception_1.Exception)
            return ApiGatewayMapper_1.ApiGatewayMapper.from(exception.toErrorResponse());
        return ApiGatewayMapper_1.ApiGatewayMapper.from(new InternalServerErrorResponse_1.InternalServerErrorResponse());
    };
    return ExceptionMapper;
}());
exports.ExceptionMapper = ExceptionMapper;
//# sourceMappingURL=ExceptionMapper.js.map