"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        index: true,
    },
    qualification: {
        type: String,
        index: true,
    },
    address: {
        type: String,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "instructor", "admin"],
        default: "student"
    },
    profile: {
        avatar: {
            type: String
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"]
        }
    },
    contact: {
        additionalEmail: {
            type: String
        },
        phone: {
            type: String,
        },
        socialMedia: {
            instagram: String,
            linkedIn: String,
            github: String
        }
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isGauth: {
        type: Boolean,
        default: false
    },
    isReject: {
        type: Boolean,
        default: false
    },
    profession: {
        type: String,
        enum: ["working", "student"]
    },
    otp: {
        type: String
    },
    profit: {
        type: Number,
        default: 0
    },
    cv: {
        type: String
    }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)("users", userSchema);
