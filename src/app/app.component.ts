import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../app/componentes/dialog/dialog.component';
import { GameService } from './services/game.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'machineStore';

  constructor(public dialog: MatDialog, private api: GameService) {}

  ngOnInit() {
  }

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

