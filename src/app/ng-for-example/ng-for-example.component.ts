import { Component, OnInit } from '@angular/core';
import {User } from './user.model'

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  user : User;
  isCollapsed : boolean = true;
  constructor() {
    this.user = new User();
    this.user.name = "Mark";
    this.user.title = "Mr.";
    this.user.address = "126 Cheddar Close,Crawley,RH117TG";
    this.user.phone = ["5478-23434-344","2545-554777-887"];
   }

   toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }  

  ngOnInit(): void {
  }

}
