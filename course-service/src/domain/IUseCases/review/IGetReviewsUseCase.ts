import { CategoryEntity, CourseEntity, EnrollmentEntity, ReviewEntity } from "@/domain/entities";

interface PaginationData {
    reviews: ReviewEntity[];
    totalItems: number;
   
}
export interface IGetReveiwsUseCase {
    execute ( data : {page?:number,limit?:number,courseId:string} ) : Promise< PaginationData >
}