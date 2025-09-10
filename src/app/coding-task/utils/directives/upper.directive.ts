import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ecmsptUpper]'
})
export class UpperCaseDirective implements AfterViewInit {

  constructor(private rendere: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.rendere.setStyle(this.el.nativeElement, 'textTransform', 'uppercase')
  }


}
