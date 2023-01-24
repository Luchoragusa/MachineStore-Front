import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Import the components that will be used in the routes
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { NotfoundComponent } from './modules/shared/notfound/notfound.component';
import { GameDetailsComponent, StoreComponent } from './modules/games/views';
import { AdminComponent } from './modules/admin/admin.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
      path: 'store',
      component: StoreComponent,
      canActivate: [AuthGuard]
  },
  {
    path: 'store/game/:gameId',
    component: GameDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {  path: '**', 
    pathMatch: 'full', 
    component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

