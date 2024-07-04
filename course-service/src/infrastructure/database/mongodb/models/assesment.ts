// import { Schema, model, Document } from 'mongoose';

// interface Option {
//     id: string;
//     text: string;
// }

// interface AssessmentEntity extends Document {
//     question: string;
//     correctAnswer: string;
//     options: Option[];
//     courseId: Schema.Types.ObjectId;
//     instructorId: Schema.Types.ObjectId;
// }

// // Define the Assessment schema
// const assessmentSchema = new Schema<AssessmentEntity>({
//     question: {
//         type: String,
//         required: true
//     },
//     correctAnswer: {
//         type: String,
//         required: true
//     },
//     options: {
//         type: [{
//             id: { type: String, required: true },
//             text: { type: String, required: true }
//         }],
//         required: true
//     },
//     courseId: {
//         type: Schema.Types.ObjectId,
//         ref: 'Courses',
//         required: true
//     },
//     instructorId: {
//         type: Schema.Types.ObjectId,
//         ref: 'Users',
//         required: true
//     }
// }, {
//     timestamps: true
// });

// // Create the Assessment model
// const Assessment = model<AssessmentEntity>('Assessment', assessmentSchema);

// export { Assessment, AssessmentEntity };

import { Schema, model, Document } from 'mongoose';

// Define Option interface
interface Option {
    id: string;
    text: string;
}

// Define Question interface
interface Question {
    question: string;
    correctAnswer: string;
    options: Option[];
}

// Define AssessmentEntity interface extending Mongoose Document
interface AssessmentEntity extends Document {
    courseId: Schema.Types.ObjectId;
    instructorId: Schema.Types.ObjectId;
    questions: Question[];
}

// Define the Question schema
const questionSchema = new Schema<Question>({
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    options: [
        {
            id: { type: String, required: true },
            text: { type: String, required: true },
        },
    ],
});

// Define the Assessment schema
const assessmentSchema = new Schema<AssessmentEntity>({
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
        required: true,
    },
    instructorId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    questions: {
        type: [questionSchema],
        required: true,
        validate: {
            validator: function (v: Question[]) {
                return v.length > 0;
            },
            message: 'An assessment must have at least one question.',
        },
    },
}, {
    timestamps: true,
});

// Create the Assessment model
const Assessment = model<AssessmentEntity>('Assessment', assessmentSchema);

export { Assessment, AssessmentEntity };
