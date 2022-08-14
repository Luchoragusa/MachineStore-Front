import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme, NavItem } from '../../interfaces/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navItems: NavItem[] = [
    {
      label: 'Perfil',
      path: '/perfil',
    }
  ];

  theme: Theme = 'light';

  constructor() { }
}
