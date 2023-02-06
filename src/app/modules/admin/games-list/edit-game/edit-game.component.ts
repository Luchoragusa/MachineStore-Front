import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    private alertify: AlertifyService
  ) { }

  game: Game = this.data.game;
  categories: Category = this.data.categories;
  developers: Developer = this.data.developers;

  ngOnInit(): void {
    // this.loadEditData(this.data.id);
    console.log(this.data.game);
  }

  form = new FormGroup({
    name: new FormControl(''),
    nameCategory: new FormControl(''),
    nameDeveloper: new FormControl(''),
    isAvailable: new FormControl(''),
  })

  // Muestra el pop-up
  // loadEditData(id: any) {
  //   this.sS.getGame(id).subscribe((response: any) => {
  //     this.editdata = response;
  //     this.form.setValue({
  //       name: this.editdata.name,
  //       nameCategory: this.editdata.Category.name,
  //       nameDeveloper: this.editdata.Developer.name,
  //       isAvailable: this.editdata.isAvailable,
  //     })
  //   })
  // }

  guardarJuego() {
    if (this.form.valid) {
      this.sS.updateTypeOf(this.data.id, this.form.value, 'game').subscribe((response: any) => {
        this.alertify.success('Juego actualizado correctamente');
      });
    } else {
      this.alertify.error('No se han podido actualizar los datos');
    }
  }

}
