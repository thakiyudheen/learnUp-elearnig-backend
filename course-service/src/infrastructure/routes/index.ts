import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";



export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { addCategories , findCategory  , updateCategory, getAllCategory } = controller( Dependencies ) ;

    const router = Router()

    // add category ---------------------------------
    router.route('/add-category').post( addCategories )
    
    // update category ---------------------------------
    router.route('/update-category').patch( updateCategory )
    
    // find category ---------------------------------
    router.route('/find-category/:categoryName').get( findCategory )
    
    // find  All category ---------------------------------
    router.route('/getAll-category').get( getAllCategory )



    return router
}