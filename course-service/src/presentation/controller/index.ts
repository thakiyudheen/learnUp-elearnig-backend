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
import { getEnrollmentByIdController } from "./enrollment/getEnrollmentById";
import { createEnrollmentController } from "./enrollment/createEnrollmentController";
import { getProgressByIdController } from "./enrollment/getProgressById";
import { updateProgressByIdController } from "./enrollment/updateProgressById";
import { createReviewController } from "./review/createReviews";
import { getReviewsController } from "./review/getReviews";
import { getStudentForChatController } from "./enrollment/getStudentForChat";
import { getInstructorForChatController } from "./enrollment/getInstructorForChat";
import { isEnrollmentExistUseCase } from "@/application/useCases";
import { isEnrollmentExistController } from "./enrollment/isEnrollementExist";



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
        updateAllCourse : updateAllCourseController( Dependencies ),
        getEnrollmentById : getEnrollmentByIdController( Dependencies ),
        createEnrollment : createEnrollmentController( Dependencies ),
        getProgressById : getProgressByIdController( Dependencies ),
        updateProgressById : updateProgressByIdController( Dependencies ),
        createReview : createReviewController( Dependencies ),
        getReviews : getReviewsController( Dependencies ),
        getStudentsForChat : getStudentForChatController( Dependencies ),
        getInstructorsForChat : getInstructorForChatController( Dependencies ),
        isEnrollmentExist : isEnrollmentExistController( Dependencies ),
    }
}