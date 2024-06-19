import { Date, ObjectId } from "mongoose";

export interface CourseEntity {
    courseTitle: string;
    subTitle:string
    description: string;
    category: string;
    pricing: string;
    categoryRef: ObjectId;
    instructorRef: ObjectId;
    language: string;
    priceAmount: string;
    courseThumbnail: string | null;
    videoTrailer: string | null;
    level : Level,
    lessons: Lesson[];
    attachments: Attachment[];
    isBlocked?: boolean;
    isPublished?: boolean;
    isReject?:boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
  
  interface Lesson {
    title: string;
    description: string;
    video: string;
    objectives: string[];
    duration: string;
  }
  
  interface Attachment {
    title: string;
    url: string;
  }
  
  enum Level {
    Biginner = "Biginner",
    Medium = "Medium",
    Intermidiat = "Intermidiat" 
  }