import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  id = '';

  game!: Game;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _games: GamesService)
  {
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params['cardId']) {
        const filtered = this.games.filter(game => game.id.toString() === params['cardId']);
        this.game = filtered[0];
      }
    });
  }

  volverAtras() {
    window.history.back();
  }
}
