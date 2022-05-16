import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/login-data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public text:string="";
  public isDisabled:boolean = false;
  public user:LoginData={
    email:'',
    password:''
  }
  public error:string|boolean = false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.text = "TEST";
  } 
  doLogin(){
    this.error = false;
    console.log("Login clicked");
    if(this.validateEmail(this.user.email)){
      this.authService.login(this.user).subscribe((response:any)=>{
        console.log(response);
        if(response && response.accessToken){
          console.log("merge");
          localStorage.setItem("token",response.accessToken);
          this.router.navigate(['/dashboard']);
        }
      });
    }
    else{
      this.error = 'Email is not valid';
    }
  }
  validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
