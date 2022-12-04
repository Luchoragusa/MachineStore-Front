import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data: any ) { }

  title : string = this.data.title;
  message : string = this.data.message;

  ngOnInit(): void {
  }

}
