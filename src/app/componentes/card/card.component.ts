import { Component, Input } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor() { }
  
  @Input() game!: Game; // Aca recibo el game desde el padre

  onClick(): void {
    console.log('click', this.game);
  }
}
