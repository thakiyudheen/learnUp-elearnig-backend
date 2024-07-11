import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

export interface IGetStudentsForChatUseCase {
    execute ( data:{instructorId:string} ) : Promise< EnrollmentEntity[] >
}