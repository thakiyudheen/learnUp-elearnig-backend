import { Enrollment } from "../../models/enrollmentModel";
import { EnrollmentEntity } from "@/domain/entities";

interface Params {
  userId?: string;
  instructorId?: string;
  page?: number;
  limit?: number;
}

export const getMyStudents = async (data: Params): Promise<{ students: EnrollmentEntity[], totalItems: number }> => {
  try {
    console.log('Received data:', data);
    console.log(data)

    const { userId, instructorId, page = 1, limit = 10 } = data;

    const query: any = {};
    if (userId) query.userId = userId;
    if (instructorId) query.instructorId = instructorId;

    const totalItems = await Enrollment.countDocuments(query);

    const students = await Enrollment.find(query)
      .populate({
        path: 'courseId',
        populate: [
          { path: 'instructorRef', model: 'users' }, 
          { path: 'category', model: 'categories' }  
        ]
      })
      .populate('userId')
      .populate('courseId')
      .skip((page - 1) * limit) // Calculate how many documents to skip based on the page number
      .limit(limit); // Limit the number of documents returned per page

    if (!students) {
      throw new Error('Failed to fetch students');
    }

    return { students, totalItems };

  } catch (error: any) {
    console.error('Error in getMyStudents:', error.message);
    throw new Error('Failed to fetch students');
  }
}
