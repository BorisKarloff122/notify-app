import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IloginInfo} from "../models/loginInfo";
import {ILoginRes} from "../models/loginRes";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public login(data: IloginInfo): Observable<ILoginRes>{
    return this.http.post<ILoginRes>('/api/login', data);
  }

  public createUser(data: IloginInfo): Observable<any>{
    return this.http.post<any>('/api/reg', data);
  }


  // dummy
  public getUsers(): Observable<any>{
    return this.http.get('/users');
  }
}
