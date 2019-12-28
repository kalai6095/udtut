import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective implements OnInit {
  @Input('background') background = '#39699a';
  @Input('color') clr = 'white';

 /* @HostBinding('style.backgroundColor') backgroundColor = '#39699a';
  @HostBinding('style.color') color = 'white';*/
   @HostBinding('style.backgroundColor') backgroundColor = this.background;
   @HostBinding('style.color') color = this.clr;

  constructor(private elementRef: ElementRef, private render: Renderer2) {

  }

  ngOnInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'background', '#39699a');
    this.elementRef.nativeElement.style.color = 'white';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.render.setStyle(this.elementRef.nativeElement, 'background', 'rgba(57, 105, 200, 1)');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.render.setStyle(this.elementRef.nativeElement, 'background', '#39699a');
  }

}
