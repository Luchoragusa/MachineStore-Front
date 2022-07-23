import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'machineStore';

  getUser() {
    const user: any = (localStorage.getItem('user') || ''); 

    if (user) {
      return JSON.parse(user);
    }

    console.log(user); 
    return user;
  }

}
