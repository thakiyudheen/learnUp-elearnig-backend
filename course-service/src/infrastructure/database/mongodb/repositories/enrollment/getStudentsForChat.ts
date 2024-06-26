import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import Course from "../../models/course";
import { Enrollment } from "../../models/enrollmentModel";

export const getStudentsForChat = async (data:{instructorId: string}) => {
  try {
    
    const courses = await Course.find({ instructorRef: data.instructorId });
    const courseIds = courses.map(course => course._id);
    

    if (courseIds.length === 0) {
      return [];
    }
    const enrollments = await Enrollment.find({
      courseId: { $in: courseIds }
    }).populate("userId");

    return enrollments;

  } catch (error: any) {
    throw ErrorResponse.internalError(`Failed to get students enrolled by instructor ${data.instructorId}: ${error.message}`);
  }
};
