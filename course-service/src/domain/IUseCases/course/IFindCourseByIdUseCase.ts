

import { CategoryEntity, CourseEntity } from "@/domain/entities";


export interface IFindCourseByIdUseCase {
    execute ( _id : string ) : Promise< CourseEntity | null >
}