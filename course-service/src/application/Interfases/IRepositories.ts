import { CategoryEntity, CourseEntity, EnrollmentEntity, ReviewEntity } from "@/domain/entities";

interface data{
     _id : string,
     isBlocked ?: boolean,
     isPublished ?: boolean,
     isReject ?: boolean,
 }
 interface EnrollmentQueryParams {
     userId?: string;
     page: number;
     limit: number;
     search?: string;
     categories?: string[];
     levels?: string[];
     sort?: 'asc' | 'desc';
   }
   interface PaginationData {
    courses: CourseEntity[];
    totalItems: number;
   
}

export interface IRepositories {
     createCategory :( categoryName : string ) => Promise<CategoryEntity >
     editCategory : (data : {_id : string , categoryName : string , isBlocked : boolean }) => Promise<CategoryEntity>
     findCategory :( categoryName : string ) => Promise< boolean >
     getAllCategories :( data:{ page?:number , limit ?:number}) => Promise< CategoryEntity[] >
     createCourse : ( data : CourseEntity ) => Promise< CourseEntity >
     getAllCourse : ( data: { instructorRef ?: string , isPublised?:boolean , page?:number , limit?:number}  ) => Promise< PaginationData | null >
     updateCourse : ( data : data ) => Promise< CourseEntity  >
     findCourseById : ( _id : string ) => Promise< CourseEntity | null>
     updateAllCourse :  ( data : any ) => Promise< CourseEntity >
     getEnrollmentById :  ( data : EnrollmentQueryParams ) => Promise< EnrollmentEntity[] >
     createEnrollment :  ( data : any  ) => Promise< EnrollmentEntity >
     getProgressById :  ( data : {userId:string ,courseId:string}  ) => Promise< EnrollmentEntity >
     updateProgressById :  ( data : {userId:string ,courseId:string,progress:any}  ) => Promise < void >
     createReview :  ( data:ReviewEntity ) => Promise <ReviewEntity >
     getReviews :  ( data:{ page?:number , limit ?:number,courseId:string} ) => Promise < {reviews: ReviewEntity[],totalItems: number;} >
     getStudentsForChat :  ( data:{ instructorId: string} ) => Promise < EnrollmentEntity[] >
     getInstructorsForChat :  ( data:{ userId: string} ) => Promise < CourseEntity[] >
     isEnrollmentExist :  ( data:any ) => Promise < EnrollmentEntity >


    } 