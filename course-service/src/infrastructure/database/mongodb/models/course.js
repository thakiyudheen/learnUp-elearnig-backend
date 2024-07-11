"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// Define the Lesson schema
var LessonSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    objectives: [{
            type: String,
            required: true
        }],
    duration: {
        type: String,
        required: true
    },
});
// Define the Attachment schema
var AttachmentSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});
// Define the Course schema
var CourseSchema = new mongoose_1.Schema({
    courseTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pricing: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.Types.ObjectId,
        ref: 'categories',
        required: true,
    },
    instructorRef: {
        type: mongoose_1.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    priceAmount: {
        type: String,
    },
    courseThumbnail: {
        type: String,
        default: null,
    },
    videoTrailer: {
        type: String,
        default: null,
    },
    lessons: {
        type: [LessonSchema],
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    attachments: {
        type: [AttachmentSchema],
        required: true,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    isReject: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true // Enable timestamps
});
// Create the Course model
var Course = (0, mongoose_1.model)("Courses", CourseSchema);
exports.default = Course;
