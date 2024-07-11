import { AssessmentEntity } from "../../../infrastructure/database/mongodb/models";

export interface IGetAllAssessmentUseCase {
    execute ( data : any ) : Promise< AssessmentEntity[] >
}