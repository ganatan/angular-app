import { CommonModule } from '@angular/common';
import {
  Component, EventEmitter, Output, forwardRef,
  ElementRef, Renderer2, ViewChild
} from '@angular/core';

import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent {


  private innerValueTmp: any = '';

  private onTouchedCallback = (): void => {
    // Callback function intentionally left blank.
  };

  private onChangeCallback = (_value: unknown): void => {
    // Callback function intentionally left blank.
  };

  @ViewChild('checkbox', { static: false }) checkbox!: ElementRef;
  @Output() buttonclick: EventEmitter<number> = new EventEmitter<number>();

  valueCheckbox: any;
  indeterminate: any;
  checked: any;

  constructor(
    private renderer: Renderer2) {
    this.valueCheckbox = null;
  }

  onSelect() {
    let value = this.checkbox.nativeElement.value;
    switch (value) {
      case "":
        this.checked = true;
        this.indeterminate = false;
        value = "true";
        this.valueCheckbox = true;
        break;
      case "true":
        this.checked = false;
        this.indeterminate = true;
        value = "false";
        this.valueCheckbox = false;
        break;
      case "false":
        this.checked = null;
        this.indeterminate = false;
        value = "";
        this.valueCheckbox = "";
        break;
    }
    this.innerValueTmp = 4;
    this.renderer.setAttribute(this.checkbox.nativeElement, 'value', value);
    this.renderer.setProperty(this.checkbox.nativeElement, 'checked', this.checked);
    this.renderer.setProperty(this.checkbox.nativeElement, 'indeterminate', this.indeterminate);
  }

  onClickButton() {
    const value = this.checkbox.nativeElement.getAttribute('value');
    // const indeterminate = this.checkbox.nativeElement.getProperty('indeterminate');
    this.buttonclick.emit(value);
  }


  get valueTmp(): any {
    return this.innerValueTmp;
  };

  set valueTmp(value: any) {
    if (value !== this.innerValueTmp) {
      if (this.checked && !this.indeterminate) { value = true; }
      if (!this.checked && this.indeterminate) { value = false; }
      if ((this.checked === null) && !this.indeterminate) { value = null; }
      this.innerValueTmp = value;
      this.onChangeCallback(value);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(valueTmp: any) {
    if (valueTmp !== this.innerValueTmp) {
      this.innerValueTmp = valueTmp;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
