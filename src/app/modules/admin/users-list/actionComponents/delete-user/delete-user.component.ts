import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modules/users/interface/user';
import { UsersService } from 'src/app/modules/users/services/users.service';
declare let alertify: any;

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: User,
    private uS:UsersService ) { }

  usuario: User = this.data;

  ngOnInit(): void {
  }

  deleteUser() {
    alertify.confirm('¿Estás seguro de que quieres eliminar este usuario?', () => {
      this.uS.deleteUser(this.data.id).subscribe((response: any) => {
        alertify.success('Usuario eliminado correctamente');
      });
    }, function () {})
  }
}
