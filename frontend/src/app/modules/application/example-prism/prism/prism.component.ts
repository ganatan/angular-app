import { Component, Input, Renderer2, forwardRef, AfterViewInit } from '@angular/core';

import { Inject, PLATFORM_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ElementRef } from '@angular/core';

declare const Prism: any;

@Component({
  selector: 'app-prism-block',
  template: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrismComponent),
      multi: true
    }
  ]
})

export class PrismComponent implements ControlValueAccessor, AfterViewInit {

  @Input() debug = false;
  @Input() language: string;
  @Input() code: string;
  private preNode: Node;
  private codeNode: Node;
  public selectedValue: number;

  propagateChange = (element: any) => {
    console.log('propagateChange' + element);
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private renderer: Renderer2,
    private elementRef: ElementRef) {

    this.preNode = this.renderer.createElement('pre');
    this.codeNode = this.renderer.createElement('code');
    this.code = '';
    this.language = '';
    this.selectedValue = 0;

  }

  public writeValue(obj: number): void {
    this.selectedValue = obj;
    this.update();
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.propagateChange = fn;
  }

  ngAfterViewInit() {
    if (!this.debug) {
      this.update();
    }
  }

  update() {

    this.preNode = this.renderer.createElement('pre');
    this.codeNode = this.renderer.createElement('code');
    this.renderer.addClass(this.codeNode, 'language-' + this.language);
    this.renderer.appendChild(this.elementRef.nativeElement, this.preNode);
    this.renderer.appendChild(this.preNode, this.codeNode);
    this.codeNode.textContent = this.code;
    Prism.highlightElement(this.codeNode);
  }

}
