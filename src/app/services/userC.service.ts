import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserVendedor } from '../models/entities/userVendedore.interface';
import {UserConsumidor} from "../models/entities/userConsumidor.interface";

@Injectable({
  providedIn: 'root'
})
export class UserCService {

  public api: string = "/user";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserConsumidor[]> {
    return this.http.get<UserConsumidor[]>(this.api);
  }

  public getUser(userId: number): Observable<UserConsumidor> {
    return this.http.get<UserConsumidor>(this.api + "?userId=" + userId);
  }

  public removeUser(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.api + "?userId=" + userId);
  }

}
