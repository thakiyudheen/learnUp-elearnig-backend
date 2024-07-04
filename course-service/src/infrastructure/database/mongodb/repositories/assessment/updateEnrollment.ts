
import { Enrollment } from "../../models/enrollmentModel";

export const updateEnrollment = async (data: any): Promise<void> => {
    try {
        console.log('Received data:', data);

        await Enrollment.updateOne({ courseId: data?.courseId, userId: data?.userId }, { $set: { ExamCompletion: true } })

        return
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
