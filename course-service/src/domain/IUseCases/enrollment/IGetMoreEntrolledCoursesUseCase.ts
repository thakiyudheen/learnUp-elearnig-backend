import { EnrollmentEntity } from "@/domain/entities";

export interface IGetMoreEnrolledCourseUseCase {
    execute ( ) : Promise< EnrollmentEntity[] >
}