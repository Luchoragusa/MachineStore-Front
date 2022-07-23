import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  show = false;
  
  constructor(private _router: Router) { }

  onClicksignUp(event: any){
    console.log('Pulsaste el boton para registrarte', event)
    this.show = true;
  }
    
  onClicksignIn(event: any) {
    localStorage.setItem('user', JSON.stringify({ id: 1, name: 'John' }));    // habilita el navbar con un usuario hardcodeado

    console.log('Pulsaste el boton para ingresar', event)
    this._router.navigate(['/home']);
    this.show = false;
  }
}
