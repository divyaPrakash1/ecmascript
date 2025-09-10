import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ecmsptUpper]'
})
export class HoverDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  private heightlightColor(bgColor: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', bgColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.heightlightColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.heightlightColor(null);
  }

}
