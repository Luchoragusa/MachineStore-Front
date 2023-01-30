import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    role: new FormControl(''),
    fechaCreacion: new FormControl(''),
  })

  guardarUsuario() {
    if(this.form.valid) {
      console.log(this.form.value);
    }
  }

}
