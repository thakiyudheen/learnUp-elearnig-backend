import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

interface Params {
    userId: string;
    courseId:string;
    progress: any;
  }
export interface IUpdateProgressByIdUseCase {
    execute ( data : Params ) : Promise< void >
}