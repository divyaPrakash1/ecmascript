import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ecmsptCapitalize]'
})
export class CapitalizeDirective {

  @Input('ecmsptCapitalize') hoverClass!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter')
  addClass() {
    this.renderer.addClass(this.el.nativeElement, this.hoverClass);
  }

  @HostListener('mouseleave')
  removeClass() {
    this.renderer.removeClass(this.el.nativeElement, this.hoverClass);
  }

}
