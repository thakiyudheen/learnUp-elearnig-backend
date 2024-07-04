"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorResponse_1 = require("./errorResponse");
var errorHandler = function (err, req, res, next) {
    if (err instanceof errorResponse_1.default) {
        return res.status(err.status).json({
            success: false,
            status: err.status,
            message: err.message,
        });
    }
    return res.status(400).json({
        success: false,
        status: 400,
        message: "Internal Server Error",
    });
};
exports.default = errorHandler;
