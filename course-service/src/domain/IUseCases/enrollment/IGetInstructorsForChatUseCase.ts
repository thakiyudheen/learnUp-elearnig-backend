import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

export interface IGetInstructorsForChatUseCase {
    execute ( data:{ userId?:string ,instructorId?:string} ) : Promise< EnrollmentEntity[] >
}