import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "Person";
  private loginEndpoint = "login";

  constructor(private httpClient:HttpClient) { 
      
  }
  public login(email:string, password:string){
     return this.httpClient.post<ContentResponseMessage>(`${environment.ApiURL}/${this.url}/${this.loginEndpoint}`,{email:email, password:password});
  }
}
export class ContentResponseMessage{

  state = "";
  data = "";
  message = "";

}