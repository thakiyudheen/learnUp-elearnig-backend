import { Assessment, AssessmentEntity } from "../../models";

export const updateAssessment = async (data: any): Promise<AssessmentEntity> => {
    try {
        console.log('Received data:', data);

        const { courseId, _id, question, correctAnswer, options, instructorId } = data;

        
        const assessment = await Assessment.findOne({ courseId, instructorId });

        if (!assessment) {
            throw new Error('Assessment not found');
        }

        
        const questionIndex = assessment.questions.findIndex((q: any) => q._id.toString() === _id);

        if (questionIndex === -1) {
            throw new Error('Question not found');
        }

        
        assessment.questions[questionIndex] = {
            ...assessment.questions[questionIndex],
            question: question,
            correctAnswer: correctAnswer,
            options: options
        };

        await assessment.save();
        return assessment;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
