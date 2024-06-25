import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";

interface Params {
    userId: string;
    courseId: string;
    progress:any
  }
 
  

export const updateProgressById = async  (  data :Params ) : Promise < void > => {
    console.log(data)
    try {
        const enrollment = await Enrollment.updateOne({userId:data.userId,courseId:data.courseId},{ $set: {"progress.completedLessons": data.progress } })
        
        return

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}