import { IDependecies } from "../../application/Interfases/IDependencies";
import { addCategoryController } from "./category/addCategory";
import { updateCategoryController } from "./category/updateCategory";
import { findCategoryController } from "./category/findCategory";
import { getAllCategoryController } from "./category/getAllCategory";
import { createCourseController } from "./course/createCourse";
import { updateCourseController } from "./course/updateCourse";
import { getAllCourseController } from "./course/getAllcourses";
import { findCourseByIdController } from "./course/findCourseByIdUseCase";
import { updateAllCourseController } from "./course/updateAllcourse";


export const controller = ( Dependencies : IDependecies ) => {
    return {
        addCategories : addCategoryController( Dependencies ),
        updateCategory : updateCategoryController( Dependencies ),
        findCategory : findCategoryController( Dependencies ),
        getAllCategory : getAllCategoryController( Dependencies ),
        createCourse : createCourseController( Dependencies ),
        updateCourse : updateCourseController( Dependencies ),
        getAllCourse : getAllCourseController( Dependencies ),
        findCourseById : findCourseByIdController( Dependencies ),
        updateAllCourse : updateAllCourseController( Dependencies )
    }
}