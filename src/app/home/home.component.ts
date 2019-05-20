import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formShown: boolean;

  constructor() {
    this.formShown = false;
  }

  ngOnInit() {
  }

  showSubscriptionForm = () => {
    this.formShown = true;
  }

}
