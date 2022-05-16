import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() firstName:string='';
  @Input() lastName:string='';
  
  @Output() onDeleteUser: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(name:string){
    this.onDeleteUser.emit(name);
  }

}
