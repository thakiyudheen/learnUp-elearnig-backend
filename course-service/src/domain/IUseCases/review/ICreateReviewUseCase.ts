import { CategoryEntity, CourseEntity, EnrollmentEntity, ReviewEntity } from "@/domain/entities";

export interface ICreateReveiwUseCase {
    execute ( data : ReviewEntity ) : Promise< ReviewEntity >
}