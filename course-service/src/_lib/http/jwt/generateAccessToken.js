"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var generateAccessToken = function (payload) {
    var _id = payload._id, email = payload.email, role = payload.role;
    var newPayload = { _id: _id, email: email, role: role };
    return jsonwebtoken_1.default.sign(newPayload, String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: '1m' });
};
exports.generateAccessToken = generateAccessToken;
