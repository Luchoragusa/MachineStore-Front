import * as alertify from 'alertifyjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

  confirm(message: string, okCallback: () => any, cancelCallback: () => any) {
    alertify.confirm(message, function (e:any) {
      if (e) {
        okCallback();
      } else {
        cancelCallback();
      }
    });
  }
}
