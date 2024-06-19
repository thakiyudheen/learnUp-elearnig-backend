import { CategoryEntity, CourseEntity } from "@/domain/entities";

interface data{
     _id : string,
     isBlocked ?: boolean,
     isPublished ?: boolean,
     isReject ?: boolean,
 }
 
 
export interface IRepositories {
     createCategory :( categoryName : string ) => Promise<CategoryEntity >
     editCategory : (data : {_id : string , categoryName : string , isBlocked : boolean }) => Promise<CategoryEntity>
     findCategory :( categoryName : string ) => Promise< boolean >
     getAllCategories :( ) => Promise< CategoryEntity[] >
     createCourse : ( data : CourseEntity ) => Promise< CourseEntity >
     getAllCourse : ( data: { instructorRef ?: string }  ) => Promise< CourseEntity[] | null >
     updateCourse : ( data : data ) => Promise< CourseEntity  >
     findCourseById : ( _id : string ) => Promise< CourseEntity | null>
     updateAllCourse :  ( data : any ) => Promise< CourseEntity >
    } 