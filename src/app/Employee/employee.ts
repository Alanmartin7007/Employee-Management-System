import { Department } from "../Department/department";
import { Gender } from "./gender";

export interface Employee {
    id:number;
    name:string;
    dateOfBirth:Date;
    gender:Gender;
    mobileNo:number;
    email:string;
    salary:number;
    departmentId:number;
    department:Department;
}
