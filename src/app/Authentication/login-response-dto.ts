import { Roles } from "./roles";

export interface LoginResponseDto {
    userName:string,
    email:string,
    token:string,
    role:Roles
}
