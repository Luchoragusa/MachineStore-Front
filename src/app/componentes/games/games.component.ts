import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GamesResponse } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  
  gamesResponse!: GamesResponse;

  constructor(private _games: GamesService) {
    this._games.getGames().subscribe({
      next: (gamesResponse: GamesResponse) => {
        this.gamesResponse = gamesResponse;
      },
    });
  }

  removeChild(game: any): void{
    const filtered = this.gamesResponse.games.filter(g => g.id !== game.id);
    this.gamesResponse.games = filtered;
  }
}
