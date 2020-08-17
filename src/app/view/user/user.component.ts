import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  routes =[
    {linkName:'Profile',url:'profile'},
    {linkName:'Contact',url:'contact'}
    ];
  constructor() { }

 

  ngOnInit(): void {
  
  }

}
