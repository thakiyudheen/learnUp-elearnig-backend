import { CategoryEntity, CourseEntity } from "@/domain/entities";

interface data{
    _id : string,
    isBlocked : boolean,
    isPublished : boolean,
    isReject : boolean,
}


export interface IUpdateCourseUseCase {
    execute ( data : data ) : Promise< CourseEntity >
}