import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // setTimeout and return to /login
    setTimeout(() => {
      localStorage.clear();
      window.location.href = '';
    }, 2000);
  }

}
