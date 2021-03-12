import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-custom-input',
  templateUrl: './first-custom-input.component.html',
  styleUrls: ['./first-custom-input.component.css']
})
export class FirstCustomInputComponent implements OnInit {
  @Input() type = 'text';
  @Input() isRequired = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
