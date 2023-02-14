import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/modules/categories/interface/category';
import { Developer } from 'src/app/modules/developers/interface/developer';
import { Game } from 'src/app/modules/games/interface/game';
import { AlertifyService } from 'src/app/modules/services/alertify.service';
import { ServicioService } from 'src/app/modules/services/servicio.service';
import { AlertDialogComponent } from 'src/app/modules/shared';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
	gameForm: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sS: ServicioService,
    private alertify: AlertifyService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  categories: Category[] = this.data.categories;
	category !: number;
  developers: Developer[] = this.data.developers;
  developer !: number;
	disabledButton = false;

  ngOnInit(): void {
		this.gameForm = this._formBuilder.group({
      name:         [''],
      category:     [''],
      developer:    [''],
      description : [''],
			image :       [''],
      trailer:      [''],
      valoration:   [''],
      isAvailable:  [''],
			date: 				[''],
    });
  }

	onFileSelected(event: any) {
    this.gameForm.controls['image'].setValue(event.target.files[0]);
  }

	addGame() {
    if (this.gameForm.valid) {
      const formData = new FormData();
      formData.append('name', this.gameForm.value.name || '');
      formData.append('category', this.gameForm.value.category || '');
      formData.append('developer', this.gameForm.value.developer || '');
      formData.append('description', this.gameForm.value.description || '');
      formData.append('trailer', this.gameForm.value.trailer || '');
      formData.append('valoration', this.gameForm.value.valoration || '');
      formData.append('isAvailable', this.gameForm.value.isAvailable || '');
      formData.append('date', this.gameForm.value.date || '');
      formData.append('image', this.gameForm.value.image || '');

      console.log(formData);

      this.sS.createTypeOf(formData, "game").subscribe({
        next: (response: any) => {
          console.log(response);
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
    } else {
      this.alertify.error('No se han podido actualizar los datos');
    }
  }
}
