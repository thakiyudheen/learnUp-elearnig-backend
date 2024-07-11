"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
var mongoose_1 = require("mongoose");
var LessonProgressSchema = new mongoose_1.Schema({
    lessonId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    totalTimeWatched: {
        type: Number,
        default: 0,
    },
});
var enrollmentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    instructorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Courses",
        required: true
    },
    enrolledAt: {
        type: mongoose_1.Schema.Types.Date,
        default: function () {
            return Date.now();
        }
    },
    completionStatus: {
        type: String,
        enum: ['enrolled', 'in-progress', 'completed'],
        default: 'enrolled'
    },
    ExamCompletion: {
        type: boolean,
        default: false
    },
    progress: {
        completedLessons: [mongoose_1.Schema.Types.ObjectId],
        completedAssessments: [mongoose_1.Schema.Types.ObjectId],
        currentLesson: mongoose_1.Schema.Types.ObjectId,
        lessonProgress: [LessonProgressSchema]
    }
});
exports.Enrollment = (0, mongoose_1.model)("enrollments", enrollmentSchema);
