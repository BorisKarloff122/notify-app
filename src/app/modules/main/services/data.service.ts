import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserInfo} from "../models/userInfo";
import {IloginInfo} from "../../auth/models/loginInfo";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  public getUserInfo(id: number): Observable<IloginInfo>{
    return this.http.get<IloginInfo>(`/api/users?id=${id}`);
  }
}
