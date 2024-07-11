import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

export interface IIsEnrollmentExistUseCase {
    execute ( data : any ) : Promise< EnrollmentEntity | null >
}