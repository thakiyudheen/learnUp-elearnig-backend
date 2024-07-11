import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

interface Params {
    userId: string;
    courseId:string;
  }
export interface IGetProgressByIdUseCase {
    execute ( data : Params ) : Promise< EnrollmentEntity >
}