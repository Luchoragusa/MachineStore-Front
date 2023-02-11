import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LogoutComponent } from 'src/app/modules/auth/components/logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public _authService: AuthService
  ) { }
  ngOnInit(): void {
  }


  logout(){
    this.dialog.open(LogoutComponent)
  }

  checkRole() {
    return this._authService.checkIsAdmin();
  }
}
