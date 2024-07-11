import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";
import Course from "../../models/course";

interface Params {
    userId: string;
    courseId: string;
    progress:any
  }
 
  

export const updateProgressById = async  (  data :Params ) : Promise < void > => {
    console.log(data)
    try {
        const isAllProgressed =await Course.findOne({_id:data.courseId})
            console.log(data.progress,isAllProgressed?.lessons?.length )
        if( isAllProgressed && isAllProgressed.lessons.length == data.progress.length ){

            const enrollment = await Enrollment.updateOne({userId:data.userId,courseId:data.courseId},{ $set: {"progress.completedLessons": data.progress ,completionStatus:'completed'} })
            
        }else{
            
            const enrollment = await Enrollment.updateOne({userId:data.userId,courseId:data.courseId},{ $set: {"progress.completedLessons": data.progress ,completionStatus:'in-progress'} })
        }
        
        return

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}