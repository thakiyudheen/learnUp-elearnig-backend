import { CourseEntity } from "@/domain/entities";


export interface IUpdateAllCourseUseCase {
    execute ( data : any ) : Promise< CourseEntity | null>
}