import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';

import { ServicioService } from 'src/app/modules/services/servicio.service';

import { Game } from 'src/app/modules/games/interface/game';
import { Category } from 'src/app/modules/categories/interface/category';
import { Developer } from 'src/app/modules/developers/interface/developer';

import { AlertifyService } from 'src/app/modules/services/alertify.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  games: Game[] = [];
  categories: Category[] = [];
  developers: Developer[] = [];
  filters!: NgModel;

  dataSource!: MatTableDataSource<any>;
  isShowing!: boolean;

  constructor(
    private _serService: ServicioService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    // this.alertify.success('¡Bienvenido a la tienda!');

    // Carga juegos al inicio
    this.cargarJuegos();
    // Carga las categorías
    this._serService.getAllTypesOfStuff('category').subscribe({
      next: (response: any) => {
        this.categories = response.elemts;
        console.log(this.categories);
      },
      error: (err: any) => {
        console.error(`Código de error ${err.status}: `, err.error.msg);
      },
    });

    // Carga los desarrolladores
    this._serService.getAllTypesOfStuff('developer').subscribe({
      next: (response: any) => {
        this.developers = response.elemts;
        console.log(this.developers);
      },
      error: (err: any) => {
        console.error(`Código de error ${err.status}: `, err.error.msg);
      },
    });
  }

  cargarJuegos() {
    // Busca los juegos para cargarlos en la tienda

    // this._gamesService.getGames().subscribe({
    this._serService.getGamesByType('game').subscribe({
      next: (response: any) => {
        this.games = response;
      },
      error: (err: any) => {
        console.error(`Código de error ${err.status}: `, err.error.msg);
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.games);
        this.dataSource.filterPredicate = (data, filter) => {
          return data.name.toLowerCase().includes(filter);
        };
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  categoryFilter(categoryId: number) {
    if (categoryId === 0) {
      this.cargarJuegos();
    } else {
      // this._categoriesService.getGames(categoryId).subscribe({
      this._serService.getGamesByType('category', categoryId).subscribe({
        next: (response: any) => {
          this.games = response.games;
        },
        error: (err: any) => {
          console.error(`Código de error ${err.status}: `, err.error.msg);
          this.dataSource.data = [];
        },
        complete: () => {
          this.dataSource = new MatTableDataSource(this.games);
          this.dataSource.filterPredicate = (data, filter) => {
            return data.name.toLowerCase().includes(filter);
          };
        },
      });
    }
  }

  developerFilter(developerId: number) {
    if (developerId === 0) {
      this.cargarJuegos();
    } else {
      // this._developersService.getGames(developerId).subscribe({
      this._serService.getGamesByType('developer', developerId).subscribe({
        next: (response: any) => {
          this.games = response.games;
        },
        error: (err: any) => {
          console.error(`Código de error ${err.status}: `, err.error.msg);
          this.dataSource.data = [];
        },
        complete: () => {
          this.dataSource = new MatTableDataSource(this.games);
          this.dataSource.filterPredicate = (data, filter) => {
            return data.name.toLowerCase().includes(filter);
          };
        },
      });
    }
  }
}
