import { AssessmentEntity } from "../../../infrastructure/database/mongodb/models";

export interface IDeleteAssessmentUseCase {
    execute ( data : any ) : Promise< void >
}