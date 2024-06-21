import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

export interface IGetEnrollmentByIdUseCase {
    execute ( _id : string ) : Promise< EnrollmentEntity[] >
}