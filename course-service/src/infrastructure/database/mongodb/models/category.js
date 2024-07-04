"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1.Schema({
    categoryName: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.Category = (0, mongoose_1.model)("categories", categorySchema);
