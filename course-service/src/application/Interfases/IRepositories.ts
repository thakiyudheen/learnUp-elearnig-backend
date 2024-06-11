import { CategoryEntity, CourseEntity } from "@/domain/entities";


export interface IRepositories {
     createCategory :( categoryName : string ) => Promise<CategoryEntity >
     editCategory : (data : {_id : string , categoryName : string , isBlocked : boolean }) => Promise<CategoryEntity>
     findCategory :( categoryName : string ) => Promise< boolean >
     getAllCategories :( ) => Promise< CategoryEntity[] >
     createCourse : ( data : CourseEntity ) => Promise< CourseEntity >
    } 