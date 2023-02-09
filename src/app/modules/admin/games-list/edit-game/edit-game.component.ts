import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicioService } from 'src/app/modules/services/servicio.service';
import { AlertifyService } from 'src/app/modules/services/alertify.service';
import { Game } from 'src/app/modules/games/interface/game';
import { Category } from 'src/app/modules/categories/interface/category';
import { Developer } from 'src/app/modules/developers/interface/developer';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sS: ServicioService,
    private alertify: AlertifyService,
    private _formBuilder: FormBuilder,
  ) { }

  game: Game = this.data.game;
  categories: Category[] = this.data.categories;
  developers: Developer[] = this.data.developers;
  category !: number;
  developer !: number;
  gameForm !: FormGroup;

  ngOnInit(): void {
    this.gameForm = this._formBuilder.group({
      name:         [''],
      category:     [''],
      developer:    [''],
      isAvailable:  [''],
      description : [''],
      trailer:      [''],
      valoration:   [''],
    });

    this.loadEditData();
  }

  // Muestra el pop-up
  async loadEditData() {
    var band : boolean = true
    var i = 1;

    while (band) {
      if (this.game.idCategory == this.categories[i].id) {
        this.category = this.categories[i].id;
        band = false;
      } else {
        i++;
      }
    }

    band = true;
    i = 1;
    while (band) {
      if (this.game.idDeveloper == this.developers[i].id) {
        this.developer = this.developers[i].id;
        band = false;
      } else {
        i++;
      }
    }

    this.gameForm = this._formBuilder.group({
      name:         [this.game.name],
      isAvailable:  [this.game.isAvailable],
      description : [this.game.description],
      trailer:      [this.game.trailer],
      valoration:   [this.game.valoration],
    });

  }

  guardarJuego() {
    if (this.gameForm.valid) {
      const gameEdited = {
        id: this.game.id,
        name: this.gameForm.value.name,
        idCategory: this.category,
        idDeveloper: this.developer,
        isAvailable: this.gameForm.value.isAvailable,
        description: this.gameForm.value.description,
        trailer: this.gameForm.value.trailer,
        valoration: this.gameForm.value.valoration,
      }

      this.sS.updateTypeOf(gameEdited.id, gameEdited, 'game').subscribe((response: any) => {
        this.alertify.success('Juego actualizado correctamente');
      });

    } else {
      this.alertify.error('No se han podido actualizar los datos');
    }
  }
}
