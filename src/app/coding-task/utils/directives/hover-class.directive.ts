import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ecmsptHoverClass]'
})
export class HoverClassDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }



  @HostListener('mouseenter')
  hover() {
    this.renderer.addClass(this.el.nativeElement, 'text-danger')
  }

  @HostListener('mouseleave')
  leave() {
    this.renderer.removeClass(this.el.nativeElement, 'text-danger')
  }

}
