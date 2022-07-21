import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from '../../interfaces/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  game!: Game;
  subscription!: Subscription;
  id = '';

  constructor(
    private _activatedRoute: ActivatedRoute
    // private _gamesService: GamesService
  ) {
    if (this._activatedRoute.snapshot.params['cardId']) {
      this._activatedRoute.params.subscribe((params: Params) => {
        if (params['cardId']) {
          this.id = params['cardId'];
        }
      });
    }
      
    }
}
