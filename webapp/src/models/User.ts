export interface IUser{
    id: number;
    username: string;
    name: string;
    role: string,
    token: string;
    image?: string;
    password:string; 
    needsPasswordReset:boolean;
}
    
export class User implements IUser {
    id = 0;
    username = "";
    name = "";
    role = "";
    token = "";
    image? = "";
    password = "";
    needsPasswordReset = true;
}
export interface IUserFormValues{
    userName: string;
    password:string;
}