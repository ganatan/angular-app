import {
  Component,
  Input,
  Renderer2,
  ElementRef,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-nginx';

declare const Prism: any;

@Component({
  selector: 'app-prism-block',
  standalone: true,
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrismComponent),
      multi: true,
    },
  ],
})
export class PrismComponent implements ControlValueAccessor, AfterViewInit {
  @Input() debug = false;
  @Input() language = '';
  @Input() code = '';

  private preNode: Node;
  private codeNode: Node;
  public selectedValue = 0;

  propagateChange: (value: any) => void = () => {
    // Default no-op implementation
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.preNode = this.renderer.createElement('pre');
    this.codeNode = this.renderer.createElement('code');
  }

  writeValue(obj: number): void {
    this.selectedValue = obj;
    this.update();
  }

  registerOnChange(fn: (value: any) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    const _ignored = fn;
  }

  ngAfterViewInit(): void {
    if (!this.debug) {
      this.update();
    }
  }

  update(): void {
    this.preNode = this.renderer.createElement('pre');
    this.codeNode = this.renderer.createElement('code');
    this.renderer.addClass(this.codeNode, 'language-' + this.language);
    this.renderer.appendChild(this.elementRef.nativeElement, this.preNode);
    this.renderer.appendChild(this.preNode, this.codeNode);
    this.codeNode.textContent = this.code;
    Prism.highlightElement(this.codeNode);
  }
}