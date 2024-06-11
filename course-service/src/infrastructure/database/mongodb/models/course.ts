import { CourseEntity } from "@/domain/entities";
import { Schema, model, Types } from "mongoose";

// Define the Lesson schema
const LessonSchema = new Schema({
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
const AttachmentSchema = new Schema({
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
const CourseSchema = new Schema({
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
        type: Types.ObjectId ,
        required: true,
    },
    instructorRef: {
        type: Types.ObjectId,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    priceAmount: {
        type: String,
        required: true,
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
        type: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
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
}, {
    timestamps: true // Enable timestamps
});

// Create the Course model
const Course = model<CourseEntity>("Courses", CourseSchema);

export default Course;
