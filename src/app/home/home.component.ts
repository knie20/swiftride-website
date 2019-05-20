import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;

  formShown: boolean;
  alertShown: boolean;
  innerWidth: number;

  constructor() {
    this.formShown = false;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  showSubscriptionForm = () => {
    this.formShown = true;
  }

  subscribe = () => {
    if(!this.name) {
      
    }
  }

}
