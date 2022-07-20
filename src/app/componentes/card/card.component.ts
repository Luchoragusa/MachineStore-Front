import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() game!: Game;
  
  constructor() { }

  ngOnInit(): void {
  }

}
