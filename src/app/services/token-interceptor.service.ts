import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  headers!: any;
  constructor(private _authService: AuthService) {}
  intercept(req: any, next: any) {
    const headers = req.headers.set('user-token', this._authService.getToken());
    const tokenizedReq = req.clone({ headers });
    return next.handle(tokenizedReq);
  }
}
