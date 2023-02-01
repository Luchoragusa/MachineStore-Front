import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // setTimeout and return to /store
    setTimeout(() => {
      localStorage.clear();
      window.location.href = '/store';
    }, 2000);
  }

}
