import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  dateMessage : string ;
  someNumber : number =14;
  constructor() { 
    setInterval(()=>{
      let currentDate = new Date();
      this.dateMessage  = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    },1000);
  }

  ngOnInit(): void {
  }

  addTwoNumbers(a:number,b:number){
    return a+b;
  }



}
