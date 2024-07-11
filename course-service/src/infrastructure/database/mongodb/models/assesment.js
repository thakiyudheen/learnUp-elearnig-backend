"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assessment = void 0;
var mongoose_1 = require("mongoose");
// Define the Assessment schema
var assessmentSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    options: {
        type: [{
                id: { type: String, required: true },
                text: { type: String, required: true }
            }],
        required: true
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Courses',
        required: true
    },
    instructorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
}, {
    timestamps: true
});
// Create the Assessment model
var Assessment = (0, mongoose_1.model)('Assessment', assessmentSchema);
exports.Assessment = Assessment;
