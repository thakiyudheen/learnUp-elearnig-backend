import { ObjectId } from "mongoose";

enum Role {
    student = 'student',
    instructor = 'instructor',
    admin = 'admin'
}

enum Gender {
    male = 'male' ,
    female = 'female' ,
    other = 'other'
}
enum proffession {
    student = 'student',
    working = 'working'
}

interface profile {
    avatar ?: string , 
    dateOfBirth ?: Date,
    gender ?: Gender
}

interface  socialMedia {
    instagram ?: string,
    linkdin ?: string,
    github ?: string
}

interface contact {
    additionalEmail ?: string,
    phone ?: string ,
    socialMedia ?: socialMedia
}

export interface userEntity  {
    _id : ObjectId,
    firstName ?: string ;
    lastName ?: string ;
    username ?: string | null | undefined;
    email ?: string ;
    password ?: string ;
    qualification?:string;
    address ?:string;
    role ?: Role ;
    contact ?: contact ;
    isBlocked ?: boolean ;
    isVerified ?: boolean ;
    isReject ?: boolean ;
    isGauth ?: boolean ;
    createdAt ?: Date ;
    updatedAt ?: Date ;
    avatar?:string;
    otp ?: string ;
    proffession ?: proffession ;


}