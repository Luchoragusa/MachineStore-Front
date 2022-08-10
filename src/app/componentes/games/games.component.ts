import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  constructor(private _games: GamesService) {
    this._games.getGames().subscribe({
      next: (response: any) => {
        console.log(response);
      }
    });
  }
}
