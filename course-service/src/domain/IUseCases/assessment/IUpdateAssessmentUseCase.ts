import { AssessmentEntity } from "../../../infrastructure/database/mongodb/models";

export interface IUpdateAssessmentUseCase {
    execute ( data : any ) : Promise< AssessmentEntity >
}