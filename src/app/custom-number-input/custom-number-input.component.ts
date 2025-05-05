import { NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-number-input',
  imports: [NgIf],
  templateUrl: './custom-number-input.component.html',
  styleUrl: './custom-number-input.component.scss',
})
export class CustomNumberInputComponent implements ControlValueAccessor {
  @Input() label: string = 'defalut';
  @Input() placeholder: string = 'placeholder';
  @Input() type: string = 'text';
  @Input() disabled = false;
  value: string = 'default value';
  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}
