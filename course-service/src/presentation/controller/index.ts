import { findCategory } from "@/infrastructure/database/mongodb/repositories";
import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { addCategoryController } from "./category/addCategory";
import { updateCategoryController } from "./category/updateCategory";
import { findCategoryController } from "./category/findCategory";

export const controller = ( Dependencies : IDependecies ) => {
    return {
        addCategories : addCategoryController( Dependencies ),
        updateCategory : updateCategoryController( Dependencies ),
        findCategory : findCategoryController( Dependencies )
    }
}