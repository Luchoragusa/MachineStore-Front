import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category } from 'src/app/modules/categories/interface/category';
import { Developer } from 'src/app/modules/developers/interface/developer';
import { Game } from 'src/app/modules/games/interface/game';
import { AlertifyService } from 'src/app/modules/services/alertify.service';
import { ServicioService } from 'src/app/modules/services/servicio.service';
import { AlertDialogComponent } from 'src/app/modules/shared/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(
    private sS: ServicioService,
    private alertify: AlertifyService,
    private _router: Router,
    public dialog: MatDialog
  ) { }

  registerForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required]
    }),
    image: new FormControl('', {
      validators: [Validators.required]
    }),
    category: new FormControl('', {
      validators: [Validators.required]
    }),
    developer: new FormControl('', {
      validators: [Validators.required]
    }),
    isAvailable: new FormControl('', {
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      validators: [Validators.required]
    }),
    trailer: new FormControl('', {
      validators: [Validators.required]
    }),
    valoration: new FormControl('', {
      validators: [Validators.required]
    }),
    date: new FormControl('', {}),
  });

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.registerForm.controls['image'].setValue(event.target.files[0]);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('name', this.registerForm.value.name || '');
      formData.append('category', this.registerForm.value.category || '');
      formData.append('developer', this.registerForm.value.developer || '');
      formData.append('isAvailable', this.registerForm.value.isAvailable || '');
      formData.append('description', this.registerForm.value.description || '');
      formData.append('trailer', this.registerForm.value.trailer || '');
      formData.append('valoration', this.registerForm.value.valoration || '');

      this.sS.createTypeOf(formData, 'game').subscribe({
        next: (response: any) => {
          console.log(response);
          this._router.navigate(['/store']);
        },
        error: (error: any) => {
          console.log(error);
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'Error',
              message: error.error.message
            }
          });
        }
      });
    }
    console.log(this.registerForm.value);
  }

}
