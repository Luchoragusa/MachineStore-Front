import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../../categories/interface/category';
import { Developer } from '../../developers/interface/developer';
import { Game } from '../../games/interface/game';
import { ServicioService } from '../../services/servicio.service';
import { AlertDialogComponent } from '../../shared/alert-dialog/alert-dialog.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private _serService: ServicioService
  ) { }

  displayedColumns: string[] = ['id', 'name', 'category', 'developer', 'isAvailable', 'actions'];
  dataSource !: MatTableDataSource<Game>;
  categories!: Category[];
  developers!: Developer[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getGames();
    this.getCategories();
    this.getDevelopers();
  }
  response: any;

  getGames() {
    this._serService.getGamesByType('game').subscribe({
      next: (response: Game[]) => {
        this.response = response;
        const games: Game[] = [];
        this.response.forEach((game: any) => {
          games.push({
            id: game.id,
            name: game.name,
            image: game.image,
            valoration: game.valoration,
            idCategory: game.Category.id,
            nameCategory: game.Category.name,
            idDeveloper: game.Developer.id,
            nameDeveloper: game.Developer.name,
            description: game.description,
            trailer: game.trailer,
            isAvailable: game.isAvailable,
            date: game.date,
            createdAt: game.createdAt,
            updatedAt: game.updatedAt,
          });
        });

        this.dataSource = new MatTableDataSource(games);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        this.dialog.open(AlertDialogComponent, {
          data: {
            title: 'Error',
            message: 'Error al recuperar los juegos'
          }
        });
      }
    });
  }

  getCategories() {
    this._serService.getAllTypesOfStuff('category').subscribe({
      next: (response: any) => {
        this.categories = response.elemts;
        console.log(this.categories);
      },
    error: (err: any) => {
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'Error',
          message: 'Error al recuperar las categorias'
        }
      });
    }
    });
  };

  getDevelopers() {
    this._serService.getAllTypesOfStuff('developer').subscribe({
      next: (response: any) => {
        this.developers = response.elemts;
        console.log(this.developers);
      },
    error: (err: any) => {
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'Error',
          message: 'Error al recuperar los desarrolladores'
        }
      });
    }
    });
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editGame(game: Game) {
    this.dialog.open(EditGameComponent, {
      data: {
        game,
        categories: this.categories,
        developers: this.developers
      }
    }).afterClosed().subscribe(() => {
      this.getGames();
    });
  }

  deleteGame(game: Game) {
    this.dialog.open(DeleteGameComponent, {
      data: {game},
    }).afterClosed().subscribe(() => {
      this.getGames();
    });
  }

}
