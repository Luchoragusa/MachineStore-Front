import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, GamesResponse } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-founded',
  templateUrl: './game-founded.component.html',
  styleUrls: ['./game-founded.component.css']
})
export class GameFoundedComponent implements OnInit {

  gamesResponse!: GamesResponse;
  games!: Game[];

  constructor(private route: ActivatedRoute, private _games: GamesService) {
    // this._games.getGames().subscribe({
    //     next: (gamesResponse: GamesResponse) => {
    //       this.gamesResponse = gamesResponse;
    //       this.games = this.gamesResponse.games;
    //       console.log("Traigo todos los juegos para el filtrado");
    //       console.log(this.games);
    //     },
    // });
  }

  games_search: Game[] = [];

   ngOnInit(): void {

    // _games: GamesService
    console.log("Traigo todos los juegos para el filtrado");
    this._games.getGames().subscribe({
      next: (gamesResponse: GamesResponse) => {
        this.gamesResponse = gamesResponse;
        this.games = this.gamesResponse.games;
        console.log("Traigo todos los juegos para el filtrado");
        console.log(this.games);
      }
    }
    
    );

    // console.log("En el onInit");
    // console.log(this.games);
    // this.route.params.subscribe(params => {
    //   if (params['searchTerm']) {
    //     this.games_search = this.gamesResponse.games.filter(game => game.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
    //   } else {
    //     this.gamesResponse.games = this.gamesResponse.games;
    //   }
    // });
   }
}
