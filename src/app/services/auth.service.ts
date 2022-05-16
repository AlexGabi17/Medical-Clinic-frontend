import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../pages/login/login.component';
import { LoginData } from '../interfaces/login-data';
import { registerLocaleData } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string=environment.baseUrl;
  private privateHttpHeaders={
    headers: new HttpHeaders({
      'content-type':'application/json'
    }),
  }
  constructor(private http: HttpClient) {
    
    

   }

   login(data:LoginData){
    return this.http.post(this.baseUrl+"api/Auth/login",data, this.privateHttpHeaders);
  };

  register(data:any){
    return this.http.post(
      this.baseUrl+'api/Auth/register',
      data,
      this.privateHttpHeaders
    );
  }
}

