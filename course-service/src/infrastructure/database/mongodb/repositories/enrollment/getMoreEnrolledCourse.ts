import {  EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";


export const getMoreEnrolledCourse = async  ( ) : Promise < EnrollmentEntity[] > => {
    try {
       
        const enrollment : any  = await Enrollment.aggregate([
            // Group by courseId and count occurrences
            {
              $group: {
                _id: "$courseId",
                count: { $sum: 1 }
              }
            },
           
            {
              $lookup: {
                from: "courses",       // Name of the Courses collection
                localField: "_id",     // The _id field from the group stage (which is courseId)
                foreignField: "_id",   // The _id field from the Courses collection
                as: "courseData"       // Output array field containing course details
              }
            },
            { $unwind: "$courseData" },
            
            { $sort: { count: -1 } },
           
            { $limit: 4 },
           
            {
              $project: {
                courseId: "$_id",
                count: 1,
                courseData: 1
              }
            }
          ]);
          
          console.log(enrollment);
          
          
          console.log(enrollment);
          
          console.log('this most selled data',enrollment)
        
        if( !enrollment ) {

            throw new Error('enrollment fetching Failed ');
        }

        return enrollment ;

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}