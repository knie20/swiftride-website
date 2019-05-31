import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  innerWidth: number;
  screenSize: string;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 960) {
      this.screenSize = 'sm';
    } else {
      this.screenSize = 'md';
    }
  }

}
