import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modules/users/interface/user';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { AlertifyService } from 'src/app/modules/services/alertify.service';

@Component({
  selector: 'app-delete-user-game',
  templateUrl: './delete-user-game.component.html',
  styleUrls: ['./delete-user-game.component.css']
})
export class DeleteUserGameComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: User,
    private uS: UsersService,
    private alertify: AlertifyService,
  ) { }

  usuario: User = this.data;

  ngOnInit(): void {
  }

  // deleteUserGame() {
  //   this.uS.deleteUserGame().subscribe(
  //     (response: any) => {
  //       this.alertify.success('Juego eliminado del usuario');
  //     },
  //     (error: any) => {
  //       this.alertify.error('No se pudo eliminar el juego del usuario');
  //     }
  //   );
  // }

}
