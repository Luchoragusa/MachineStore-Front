import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'idCategory', 'createdAt'];
  dataSource!: MatTableDataSource<any>; // en el any es el tipo de dato que se va a mostrar en la tabla

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private api: GameService ) { }

  ngOnInit(): void {
      this.getAllGames();
    }

  getAllGames() {
    this.api.getGames().subscribe({
      next: (res) => {
        console.log(res.elemts);
        this.dataSource = new MatTableDataSource(res.elemts); // le cargo a la tabla los datos que me trae el servicio
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error al obtener los juegos");
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
