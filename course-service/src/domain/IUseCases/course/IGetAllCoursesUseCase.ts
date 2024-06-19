
import { CategoryEntity, CourseEntity } from "@/domain/entities";


export interface IGetAllCourseUseCase {
    execute ( data: { instructorRef ?: string } ) : Promise< CourseEntity[] | null >
}