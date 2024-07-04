import { AssessmentEntity } from "../../..//infrastructure/database/mongodb/models";

export interface ICreateAssessmentUseCase {
    execute ( data : any ) : Promise< AssessmentEntity >
}