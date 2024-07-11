
import { CategoryEntity, CourseEntity } from "@/domain/entities";


interface PaginationData {
    courses: CourseEntity[];
    totalItems: number;
}

export interface IGetAllCourseUseCase {
    execute ( data: { instructorRef ?: string , isPublished?:boolean,page?:number,limit?:number,isBlocked?:boolean } ) : Promise< PaginationData | null >
}