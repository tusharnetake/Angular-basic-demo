import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-demo',
  templateUrl: './rest-demo.component.html',
  styleUrls: ['./rest-demo.component.css']
})
export class RestDemoComponent implements OnInit {

  response : any;
  userName : string = "";
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  searchUser(){
    let obs = this.http.get('https://api.github.com/users/'+this.userName);
    obs.subscribe((response)=>{
      this.response = response;
      console.log(response);
    });
  }

}
