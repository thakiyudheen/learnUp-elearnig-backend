import { IDependecies } from "@/application/Interfases/IDependencies";
import * as useCases from '../application/useCases'
import * as repositories from '../infrastructure/database/mongodb/repositories'


export const Dependencies : IDependecies ={
    useCases,
    repositories
    
}