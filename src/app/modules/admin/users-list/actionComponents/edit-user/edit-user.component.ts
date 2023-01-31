import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modules/users/interface/user';
import { UsersService } from 'src/app/modules/users/services/users.service';
declare let alertify: any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private uS: UsersService
  ) { }

  usuario: User = this.data;
  editdata: any;

  ngOnInit(): void {
    this.loadEditData(this.data.id);
  }

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    // idRole: new FormControl(''),
    createdAt: new FormControl(''),
  })

  loadEditData(id:any) {
    this.uS.getUser(id).subscribe((response: any) => {
      this.editdata = response;
      this.form.setValue({
        name: this.editdata.name,
        email: this.editdata.email,
        // idRole: this.editdata.idRole,
        createdAt: this.editdata.createdAt
      })
    })
  }

  guardarUsuario() {
    if(this.form.valid) {
      this.uS.updateUser(this.data.id, this.data).subscribe((response: any) => {
        alertify.success('Usuario actualizado correctamente');
      });
    }
  }

}
