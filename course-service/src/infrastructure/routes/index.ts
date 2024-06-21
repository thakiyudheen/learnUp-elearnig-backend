import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
import { jwtMiddleware } from "../../_lib/common/middleware/jwtMiddleWare";




export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { 
        
        addCategories , 
        findCategory , 
        findCourseById , 
        updateCategory, 
        getAllCategory , 
        createCourse,
        getAllCourse,
        updateCourse ,
        updateAllCourse , 
        getEnrollmentById ,
        createEnrollment

    } = controller( Dependencies ) ;

    const router = Router()

    // add category -------------------------------------
    router.route('/add-category').post( jwtMiddleware , addCategories )
    
    // update category -----------------------------------
    router.route('/update-category').patch( jwtMiddleware , updateCategory )
    
    // find category -------------------------------------
    router.route('/find-category/:categoryName').get( jwtMiddleware , findCategory )
    
    // find  All category --------------------------------
    router.route('/getAll-category').get( jwtMiddleware , getAllCategory )

    // create course -------------------------------------
    router.route('/create-course').post( jwtMiddleware , createCourse )

    // get All course-------------------------------------
    router.route('/getAll-course').get( jwtMiddleware , getAllCourse )

    // create course -------------------------------------
    router.route('/update-course').patch( jwtMiddleware , updateCourse )
    
    // find course by id ---------------------------------
    router.route('/get-course-by-id/:_id').get( jwtMiddleware , findCourseById )
    
    // update all course ---------------------------------
    router.route('/update-all-course').put( jwtMiddleware , updateAllCourse )
    
    // get Enrollment by Id -------------------------------
    router.route('/getEnrollment-ById/:_id').get( jwtMiddleware , getEnrollmentById )
    
    // create Enrollment  ----------------------------------
    router.route('/createEnrollment').post( jwtMiddleware , createEnrollment  )

    return router
}