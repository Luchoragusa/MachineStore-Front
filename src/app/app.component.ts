import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../app/componentes/dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'machineStore';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  getUser() {
    const user: any = (localStorage.getItem('user') || ''); 

    if (user) {
      return JSON.parse(user);
    }

    console.log(user); 
    return user;
  }

}
function DialogDataExampleDialog(DialogDataExampleDialog: any, arg1: { data: { animal: string; }; }) {
  throw new Error('Function not implemented.');
}

