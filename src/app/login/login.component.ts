import { Component, OnInit } from '@angular/core';
import { LoginService, ContentResponseMessage } from '../services/login.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: "";
  password:"";
  token!:ContentResponseToken;
  state = false;
  constructor(private loginService:LoginService, public router:Router) {

  }

  

  ngOnInit(): void {
  }
  getDecodedAccessToken(token: string): ContentResponseToken {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return new ContentResponseToken();
    }
  }
    login():void {

      this.loginService.login(this.email, this.password).subscribe((x:ContentResponseMessage)=>{
       
       console.log(x.data);
       
       this.state = x.state == 'SUCCESS';
       if(this.state){
        this.token = this.getDecodedAccessToken(x.data);
        localStorage.setItem('role',this.token.role);
        localStorage.setItem('email',this.token.email);
        localStorage.setItem('id_person',this.token.id_person);
        localStorage.setItem('exp',this.token.exp+"");
        this.router.navigate(['/dashboard'])
       }
       
        
    }); 
    
    
  }
}

export class ContentResponseToken{


    role="";
    email="";
    id_person="";
    exp:number;

}