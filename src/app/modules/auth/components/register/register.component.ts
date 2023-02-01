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

  selectedFile: any = null;

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
    passwordConfirm: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)]
    }),
    image: new FormControl('', {
      validators: [Validators.required]
    })
  });
  hide = true;

  constructor(
    private _router: Router,
    public dialog: MatDialog,
    private aS: AuthService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.registerForm.controls['image'].setValue(event.target.files[0]);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('name', this.registerForm.value.name || '');
      formData.append('surname', this.registerForm.value.surname || '');
      formData.append('email', this.registerForm.value.email || '');
      formData.append('password', this.registerForm.value.password || '');
      formData.append('passwordConfirm', this.registerForm.value.passwordConfirm || '');
      formData.append('image', this.registerForm.value.image || '');

      // this.aS.register(formData).subscribe({
      //   next: (response: any) => {
      //     console.log(response);
      //     this._router.navigate(['/login']);
      //   },
      //   error: (error: any) => {
      //     console.log(error);
      //     this.dialog.open(AlertDialogComponent, {
      //       data: {
      //         title: 'Error',
      //         message: error.error.message
      //       }
      //     });
      //   }
      // });
    }

    }
}

