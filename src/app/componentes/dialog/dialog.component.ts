import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  gameForm !: FormGroup;
  valoracion = ["★", "★★", "★★★", "★★★★", "★★★★★"];
  constructor( private formBuilder : FormBuilder) { 
    this.gameForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      valoracion: ['', Validators.required],
      // imagen: ['', Validators.required], Ver como subir la imagen con un archivo
      precio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
