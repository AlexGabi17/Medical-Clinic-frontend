import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {
  private baseUrl:string = environment.baseUrl;
  private privateHttpHeaders = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'Bearer '+localStorage.getItem("token"),
    }),
  };
  constructor(private http:HttpClient) {}
  getAllUsers(){
    return this.http.get(this.baseUrl+'api/users',this.privateHttpHeaders);
  }

  getAllDoctors(){
    return this.http.get(this.baseUrl+'api/Doctor/getAll',this.privateHttpHeaders);
  }
}
