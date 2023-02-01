import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modules/users/interface/user';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { AlertifyService } from 'src/app/modules/services/alertify.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private uS: UsersService,
    private alertify: AlertifyService
  ) { }

  editdata: any;
  nombreRol: string = '';

  ngOnInit(): void {
    this.loadEditData(this.data.id);
  }

  form = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl('', Validators.email),
  })

  // usuario = this.form.value;

  // Trae los datos al pop-up
  loadEditData(id: any) {
    this.uS.getUser(id).subscribe((response: any) => {
      this.editdata = response;
      this.form.setValue({
        name: this.editdata.name,
        surname: this.editdata.surname,
        email: this.editdata.email,
      })
    })
  }

  guardarUsuario() {
    if (this.form.valid) {
      this.uS.updateUser(this.data.id, this.form.value).subscribe((response: any) => {
        this.alertify.success('Usuario actualizado correctamente');
      });
    }
    else {
      this.alertify.error('Error al actualizar el usuario');
    }
  }

}
