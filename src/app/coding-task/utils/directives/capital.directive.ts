import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ecmsptCapital]'
})
export class CapitalDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'textTransform', 'uppercase')
  }

  @HostListener('mouseenter')
  hover() {
    this.renderer.addClass(this.el.nativeElement, 'text-danger')
  }

  @HostListener('mouseleave')
  leave() {
    this.renderer.removeClass(this.el.nativeElement, 'text-danger')
  }

}
