import {Component, ElementRef, Input, OnInit, Self, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NgControl, ValidationErrors, Validator, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css'],
  providers: []
})
export class GenericInputComponent implements OnInit, ControlValueAccessor, Validator {
  @ViewChild('input') input: ElementRef;
  disabled;

  @Input() type = 'text';
  @Input() isRequired = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];

    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }


  onChange(event): void {}

  onTouched(): void {}


  validate(control: AbstractControl): ValidationErrors {
    const validators: ValidatorFn[] = [];

    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    return validators;
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
