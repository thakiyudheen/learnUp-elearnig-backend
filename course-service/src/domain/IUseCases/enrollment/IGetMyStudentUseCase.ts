import { EnrollmentEntity } from "@/domain/entities";


interface Params {
    userId?: string;
    instructorId?: string;
    page?: number;
    limit?: number;
  }
export interface IGetMyStudentUseCase {
    execute (data:Params ) : Promise< { students: EnrollmentEntity[], totalItems: number } >
}