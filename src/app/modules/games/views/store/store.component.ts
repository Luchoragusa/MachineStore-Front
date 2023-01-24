import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';

import { GamesService } from 'src/app/modules/games/services/games.service';
import { CategoriesService } from 'src/app/modules/categories/services/categories.service';
import { DevelopersService } from 'src/app/modules/developers/services/developers.service';

import { Game } from 'src/app/modules/games/interface/game';
import { Category } from 'src/app/modules/categories/interface/category';
import { Developer } from 'src/app/modules/developers/interface/developer';

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
    private _gamesService: GamesService,
    private _categoriesService: CategoriesService,
    private _developersService: DevelopersService
  ) {}

  ngOnInit(): void {
    // Carga juegos al inicio
    this.cargarJuegos();
    // Carga las categorías
    this._categoriesService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response.elemts;
        console.log(this.categories);
      },
      error: (err: any) => {
        console.error(`Código de error ${err.status}: `, err.error.msg);
      },
    });

    // Carga los desarrolladores
    this._developersService.getDevelopers().subscribe({
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
    this._gamesService.getGames().subscribe({
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
      this._categoriesService.getGames(categoryId).subscribe({
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
      this._developersService.getGames(developerId).subscribe({
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
