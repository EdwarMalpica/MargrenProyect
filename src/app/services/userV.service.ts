import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserVendedor } from '../models/entities/userVendedore.interface';

@Injectable({
  providedIn: 'root'
})
export class UserVService {

  public api: string = "/user";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserVendedor[]> {
    return this.http.get<UserVendedor[]>(this.api);
  }

  public getUser(userId: number): Observable<UserVendedor> {
    return this.http.get<UserVendedor>(this.api + "?userId=" + userId);
  }

  public removeUser(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.api + "?userId=" + userId);
  }

}
