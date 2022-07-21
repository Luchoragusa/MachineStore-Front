import { Component, OnInit } from '@angular/core';
import { Theme, NavItem } from '../../interfaces/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navItems: NavItem[] = [
    {
      label: 'Cards',
      path: '/cards',
    },
    {
      label: 'Login',
      path: '/login',
    }
  ];

  theme: Theme = 'light';

  constructor() {}
}
