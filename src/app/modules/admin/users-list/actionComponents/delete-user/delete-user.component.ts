import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modules/users/interface/user';
import { UsersService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: User, 
    private uS:UsersService ) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.uS.deleteUser(this.data.id).subscribe((response: any) => {
    });
  }
}
