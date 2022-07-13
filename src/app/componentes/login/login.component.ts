import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
show = false;
onClicksignUp(event: any){
  console.log('Pulsaste el boton para registrarte', event)
  this.show = true;
}
  
onClicksignIn(event: any){
  console.log('Pulsaste el boton para registrarte', event)
  this.show = false;
}
}
