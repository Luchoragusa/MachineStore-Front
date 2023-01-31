import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/modules/games/interface/game';
import { ServicioService } from 'src/app/modules/services/servicio.service';
declare let alertify: any;

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Game,
    private sS: ServicioService
  ) { }

  juego: Game = this.data;
  editdata: any;

  ngOnInit(): void {
    this.loadEditData(this.data.id);
  }

  form = new FormGroup({
    name: new FormControl(''),
    nameCategory: new FormControl(''),
    nameDeveloper: new FormControl(''),
    isAvailable: new FormControl(''),
  })

  loadEditData(id: any) {
    this.sS.getGame(id).subscribe((response: any) => {
      this.editdata = response;
      this.form.patchValue({
        name: this.editdata.name,
        nameCategory: this.editdata.Category.name,
        nameDeveloper: this.editdata.Developer.name,
        isAvailable: this.editdata.isAvailable,
      });
    });
  }

  guardarJuego() {
    if(this.form.valid) {
      this.sS.updateTypeOf(this.data.id, this.data, 'game').subscribe((response: any) => {
        alertify.success('Juego actualizado correctamente');
      });
    }
  }

}
