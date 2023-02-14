import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/modules/categories/interface/category';
import { Developer } from 'src/app/modules/developers/interface/developer';
import { Game } from 'src/app/modules/games/interface/game';
import { AlertifyService } from 'src/app/modules/services/alertify.service';
import { ServicioService } from 'src/app/modules/services/servicio.service';

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
      trailer:      [''],
      valoration:   [''],
      isAvailable:  [''],
			date: 				[''],
    });
  }

	addGame() {
    if (this.gameForm.valid) {
      // const gameEdited = {
      //   id: this.game.id,
      //   name: this.gameForm.value.name,
      //   idCategory: this.category,
      //   idDeveloper: this.developer,
      //   isAvailable: this.gameForm.value.isAvailable,
      //   description: this.gameForm.value.description,
      //   trailer: this.gameForm.value.trailer,
      //   valoration: this.gameForm.value.valoration,
      // }

      // this.sS.updateTypeOf(gameEdited.id, gameEdited, 'game').subscribe((response: any) => {
      //   this.alertify.success('Juego actualizado correctamente');
      // });

    } else {
      this.alertify.error('No se han podido actualizar los datos');
    }
  }
}
