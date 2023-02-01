import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../auth/services/auth.service';
import { AlertDialogComponent } from '../../shared/alert-dialog/alert-dialog.component';
import { User } from '../../users/interface/user';
import { UsersService } from '../../users/services/users.service';
import { DeleteUserComponent } from './actionComponents/delete-user/delete-user.component';
import { EditUserComponent } from './actionComponents/edit-user/edit-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private uS:UsersService, private dialog: MatDialog, private _authService:AuthService) {}

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'creationDate', 'actions'];
  dataSource !: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getUsers();
  }
  response: any;

  getUsers() {
    this.uS.getUsers().subscribe({
      next: (response: User[]) => {

        this.response = response;
        const users: User[] = [];

        this.response.forEach((user: any) => {
          users.push({
            id: user.id,
            image: user.image,
            name: user.name,
            surname: user.surname,
            roleName: user.Role.name,
            email: user.email,
            idRole: user.Role.id,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          });
        });

      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      error: (err) => {
      // console.log(err);
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'Error',
          message: 'Error al recuperar los usuarios'
        }
      });
    }
  });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(user: User) {
    this.dialog.open(EditUserComponent, {
      data: user
    }).afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  deleteUser(user: User) {
    this.dialog.open(DeleteUserComponent, {
      data: user
    }).afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

}
