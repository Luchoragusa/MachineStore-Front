import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/modules/games/interface/game';
import { ServicioService } from 'src/app/modules/services/servicio.service';
declare let alertify: any;

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: Game,
    private sS:ServicioService ) { }

  juego: Game = this.data;

  ngOnInit(): void {
  }

  deleteGame() {
    alertify.confirm('¿Estás seguro de que quieres eliminar este juego?', () => {
      this.sS.deleteTypeOf(this.data.id, 'game').subscribe((response: any) => {
        alertify.success('Juego eliminado correctamente');
      });
    }, function () {})
  }

}
