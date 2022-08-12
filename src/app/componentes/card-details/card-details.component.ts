import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game, GamesResponse } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  id = '';
  game!: Game;  
  g: any;

  constructor(
    private _activatedRoute: ActivatedRoute)
  {
    if (localStorage.getItem('games')) {
      this.g = JSON.parse(localStorage.getItem('games') || '');
    }
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params['cardId']) {
        const filtered = this.g.filter((game: { id: { toString: () => any; }; }) => game.id.toString() === params['cardId']);
        this.game = filtered[0];
      }
    });
  }

  volverAtras() {
    window.history.back();
  }
}
