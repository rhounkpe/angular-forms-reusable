import {Component, Input, OnInit} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import {Address} from '../address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class AddressFormComponent implements OnInit {
  @Input() address: Address;
  form: FormGroup;

  constructor(
    private ctrlContainer: FormGroupDirective,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.ctrlContainer.form;

    this.form.addControl('addressForm', this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, null],
      street: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null],
      zip: [null, [Validators.required]],
    }));

    console.log(this.form);
  }


}
