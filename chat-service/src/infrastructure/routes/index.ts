import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { Dependencies } from "../../_boot/dependecies";
import { controller } from "../../presentation/controller";



export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const {} = controller( Dependencies ) ;

    const router = Router()




    return router
}