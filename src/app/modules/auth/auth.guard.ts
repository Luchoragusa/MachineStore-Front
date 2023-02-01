import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _router: Router, private _authService:AuthService, private dialog: MatDialog) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      const token = this._authService.getToken();
      if (token) {
        this._authService.logout();
      }
      const sessionTime = this._authService.expiredToken();

      if (sessionTime < 0) {
        this._authService.logout();
        this.dialog.open(AlertDialogComponent, {
          data: {
            title: 'Tu sesión ha expirado',
            message: 'Por favor, inicia sesión de nuevo'
          }
        })
      }
      return false;
    }
  }

}

