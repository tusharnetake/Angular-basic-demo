import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  routes =[
    {linkName:'Data Binding',url:'data-binding'},
    {linkName:'NgFor',url:'ngfor'},
    {linkName:'NgModel',url:'ngmodel'},
    {linkName:'Service Demo',url:'service'},
    {linkName:'Pipe Demo',url:'pipe'},
    {linkName:'Rest Service Call',url:'rest'},
    {linkName:'Multi-Module',url:'user'} 
    ];
}
