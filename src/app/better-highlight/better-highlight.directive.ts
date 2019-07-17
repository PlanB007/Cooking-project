import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    @Input() defaultTextColor: string = 'black';
    @Input() highlightTextColor: string = 'white';
    @HostBinding('style.color') color: string;

    ngOnInit() {
      this.color = this.defaultTextColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.color = this.highlightTextColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.color = this.defaultTextColor;
    }
}
