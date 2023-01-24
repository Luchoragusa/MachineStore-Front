import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../interface/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game!: Game;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    this._router.navigate(['/store/game/', this.game.id]);
  }
}
