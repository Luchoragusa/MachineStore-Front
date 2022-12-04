import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/interfaces/navbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems: NavItem[] = [
    {
      label: 'Perfil',
      path: '/perfil',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
