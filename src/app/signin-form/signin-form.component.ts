import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  email: any;
  name: 'Angular';
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(f): void {
    this.email = f.email;
    console.log(f);
    console.log(this.email);
    alert(`Input value is ${this.email}`);
  }
}
