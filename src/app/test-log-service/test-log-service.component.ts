import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-test-log-service',
  templateUrl: './test-log-service.component.html',
  styleUrls: ['./test-log-service.component.css']
})
export class TestLogServiceComponent implements OnInit {

  constructor( private service : LoggingService) {
    
    service.printtoConsole("Nothing Fancy Here -Just Printing Message to Console ")
   }

  ngOnInit(): void {
  }

}
