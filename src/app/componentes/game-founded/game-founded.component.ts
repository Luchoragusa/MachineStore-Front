import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, GamesResponse } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-founded',
  templateUrl: './game-founded.component.html',
  styleUrls: ['./game-founded.component.css']
})
export class GameFoundedComponent implements OnInit {

  @Input() gamesResponse!: GamesResponse;

  constructor(private route: ActivatedRoute) {}

  games_search: Game[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.games_search = this.gamesResponse.games.filter(game => game.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      } else {
        this.gamesResponse.games = this.gamesResponse.games;
      }
    });
  }
}
