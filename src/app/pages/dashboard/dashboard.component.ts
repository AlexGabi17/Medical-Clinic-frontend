import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public doctors: any[]=[];
  searchInput:string = "";
  constructor(private privateService:PrivateService) { }

  ngOnInit(): void {
    //this.getAllUsers();
    this.getAllDoctors();
  }



  doRegister(){
    
  }
  getAllDoctors(){
    this.privateService.getAllDoctors().subscribe((response:any)=>{
      this.doctors = response;
      console.log(this.doctors);
    })
  }
}
