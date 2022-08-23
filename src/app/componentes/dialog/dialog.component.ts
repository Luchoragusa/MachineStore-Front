import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  gameForm !: FormGroup;
  valoracion = ["★", "★★", "★★★", "★★★★", "★★★★★"];
  categories !: any;

  constructor( private formBuilder : FormBuilder, private apiG : GameService, private apiC : CategoryService, private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {

    this.getAllCategories();

    this.gameForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      valoracion: ['', Validators.required],
      imagen: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  addGame(){
    if(this.gameForm.valid)
    {
      this.apiG.postGame(this.gameForm.value).subscribe({
        next: (res) => {
          alert("Juego añadido correctamente");
          this.gameForm.reset(); // Borro los datos del juego
          this.dialogRef.close('save'); // Cierro el formulario
        },
        error: (err) => {
          alert("Error al añadir el juego");
        }
      });
    }
  };

  getAllCategories() {
    this.apiC.getCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.elemts;
      },
      error: (err) => {
        alert("Error al obtener las categorias");
      }
    });
  }

}
