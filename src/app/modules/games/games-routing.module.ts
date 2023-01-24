import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { StoreComponent } from './views/store/store.component';
import { GameDetailsComponent } from './views/game-details/game-details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: StoreComponent,
  },
  {
    path: 'game/:gameId',
    component: GameDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule { }
