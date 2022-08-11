import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game, GamesResponse } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  gamesResponse!: GamesResponse;
  id = '';
  game!: Game;  

  g: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _games: GamesService)
  {
    if (localStorage.getItem('game')) {
      this.g = JSON.parse(localStorage.getItem('game') || '');
      console.log(this.g);
    }

    this._activatedRoute.params.subscribe((params: Params) => {
      if (params['cardId']) {
        const filtered = this.gamesResponse.games.filter(game => game.id.toString() === params['cardId']);
        this.game = filtered[0];
      }
    });
    console.log("Hola2");
  }

  volverAtras() {
    window.history.back();
  }
}
