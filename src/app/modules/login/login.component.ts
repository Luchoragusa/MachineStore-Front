import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  show = false;
  form = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });
  hide = true;
  
  constructor(private _router: Router, 
             private aS: AuthService,
             public dialog: MatDialog) { }

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

  onSubmit() {
    if (this.form.valid) {
      
      const user = {
        email: this.form.value.email,
        password: this.form.value.password,
      };

      this.aS.login(user).subscribe({
        next:(response: any) => {
          localStorage.setItem('token', response.token);
          const decodedToken = this.getDecodedAccessToken(response.token);
          localStorage.setItem('email', decodedToken.email);
          localStorage.setItem('role', decodedToken.role);
          this._router.navigate(['/home']);
        },
        error:(err) => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Failed to login',
              message: 'Email or password incorrect'
            }
          })
        }
      });
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
