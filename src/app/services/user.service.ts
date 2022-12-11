import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/entities/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public api: string = "/user";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  public getUser(userId: number): Observable<User> {
    return this.http.get<User>(this.api + "?userId=" + userId);
  }

  public removeUser(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.api + "?userId=" + userId);
  }

}
