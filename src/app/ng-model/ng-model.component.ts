import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  inputText : string = "From Component";
  constructor() { }

  ngOnInit(): void {
  }

}
