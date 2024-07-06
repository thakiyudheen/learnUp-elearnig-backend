import { CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";

interface EnrollmentQueryParams {
    userId?: string;
    page: number;
    limit?: number;
    search?: string;
    categories?: string[];
    levels?: string[];
    sort?: 'asc' | 'desc';
    instructorId ?:string;
  }
export interface IGetEnrollmentByIdUseCase {
    execute ( data : EnrollmentQueryParams ) : Promise< EnrollmentEntity[] >
}