import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

export interface ICreateEnrollmentUseCase {
    execute ( data : any ) : Promise< EnrollmentEntity >
}