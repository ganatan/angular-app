import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    /*    this.el.nativeElement.style.backgroundColor = 'blue';
        this.el.nativeElement.text = '321';
        this.el.nativeElement.style.color = color;
        this.el.nativeElement.style.backgroundColor  */
    //    this.el.nativeElement.style.color = 'yellow';
    //    this.el.nativeElement.class = 'toto';
//    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');

/*    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Click here to add li');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.el.nativeElement, li); */
    if ( color === null) {
      this.renderer.removeClass(this.el.nativeElement, 'toto');
      this.renderer.addClass(this.el.nativeElement, 'toto2');
    } else 
    {
      this.renderer.removeClass(this.el.nativeElement, 'toto2');
      this.renderer.addClass(this.el.nativeElement, 'toto');
    }
    

  }
}