import { Component, ElementRef, HostListener, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradient-button.component.html',
  styleUrls: ['./gradient-button.component.css']
})
export class GradientButtonComponent implements OnInit {

  isGradientVisible = false;
  gradientTop: number;
  gradientLeft: number;
  gradientRadius: number;

  constructor(public el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {  
    this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width * 2;

    console.log(this.gradientRadius);
  }

  onMouseEnter() {
    this.isGradientVisible = true;
  }

  onMouseLeave() {
    this.isGradientVisible = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
    this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
  }

  get gradientStyle() {
    const top = this.gradientTop;
    const left = this.gradientLeft;
    const gradientRadius = this.isGradientVisible ? this.gradientRadius : 0;

    return {
      'height.px': gradientRadius,
      'width.px': gradientRadius,
      'top.px': top,
      'left.px': left
    };
  }

}
