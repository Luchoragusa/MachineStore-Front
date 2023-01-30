import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialogComponent } from 'src/app/modules/shared/alert-dialog/alert-dialog.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required]
    }),
    surname: new FormControl('', {
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email, Validators.minLength(5)]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)]
    }),

    idRole: new FormControl('', {
      validators: [Validators.pattern('^[0-9]*$')]
    }),
    confirmed: new FormControl('', {
      validators: [Validators.pattern('^[0-9]*$')]
    }),
  });
  hide = true;

  constructor(
    private _router: Router,
    public dialog: MatDialog,
    private aS: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.valid) {

      const user = {
        name: this.registerForm.value.name,
        surname: this.registerForm.value.surname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        idRole: this.registerForm.value.idRole,
        confirmed: this.registerForm.value.confirmed,
      };

      this.aS.register(user).subscribe({
        next:(response: any) => {
          localStorage.setItem('token', response.token);
          this._router.navigate(['/login']);
        },
        error:(err) => {
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Error al registrarse',
              message: 'Algunos datos son incorrectos'
            }
          })
        }
      });
    }
  }

}
