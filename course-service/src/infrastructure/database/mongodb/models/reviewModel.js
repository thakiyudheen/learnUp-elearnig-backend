"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });
exports.Review = (0, mongoose_1.model)("review", reviewSchema);
