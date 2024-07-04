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
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    ErrorResponse.badRequest = function (msg) {
        return new ErrorResponse(400, msg || "Bad Request");
    };
    ErrorResponse.unauthorized = function (msg) {
        return new ErrorResponse(401, msg || "Unauthorized");
    };
    ErrorResponse.paymentRequired = function (msg) {
        return new ErrorResponse(402, msg || "Payment Required");
    };
    ErrorResponse.forbidden = function (msg) {
        return new ErrorResponse(403, msg || "Forbidden");
    };
    ErrorResponse.notFound = function (msg) {
        return new ErrorResponse(404, msg || "Not Found");
    };
    ErrorResponse.conflict = function (msg) {
        return new ErrorResponse(409, msg || "Conflict");
    };
    ErrorResponse.internalError = function (msg) {
        return new ErrorResponse(500, msg || "internal Server Error");
    };
    return ErrorResponse;
}(Error));
exports.default = ErrorResponse;
