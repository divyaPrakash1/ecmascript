import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ecmsptLower]'
})
export class LowerDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  makeLowerCase() {
    this.renderer.setStyle(this.el.nativeElement, 'textTransform', 'lowercase')
  }

}
