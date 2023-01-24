import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PF-Front';

  getToken() {  
  if( localStorage.getItem('token') != null ) { 
    return true;
  }
  else {
    return false;
  }}

}
