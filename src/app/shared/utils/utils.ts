import {IloginInfo} from "../../modules/auth/models/loginInfo";

export const checkUser = (data: IloginInfo[], formData: IloginInfo): IloginInfo =>{
  return data.filter((elem: any)=> elem.login === formData.login)[0];
}

export const checkPassword = (user: IloginInfo, formData: IloginInfo): boolean =>{
  return user.password === formData.password;
}
