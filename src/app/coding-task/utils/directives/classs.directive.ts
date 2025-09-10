import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ecmsptClasss]'
})
export class ClasssDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('click')
  onClickk() {
    this.renderer.addClass(this.el.nativeElement, 'text-danger')
  }


}
