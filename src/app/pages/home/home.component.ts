import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
  ],
  animations: [
    trigger('onOpen', [
      state('opened', style({
        marginTop: '0px',
        opacity: '1'
      })),
      state('void', style({
        marginTop: '30px',
        opacity: '0'
      })),
      transition('void => opened', [
        animate('600ms')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @Input() fname: string;
  @Input() lname: string;
  @Input() email: string;

  formShown: boolean;
  alertShown: boolean;
  innerWidth: number;
  isLoaded: boolean;
  formRevealed: boolean;

  constructor() {
    this.formShown = false;
    this.formRevealed = false;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.isLoaded = true;
  }

  subscribe = () => {
    window.location.href = 'http://eepurl.com/gtKG65';
  }

}
