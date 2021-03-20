import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCustomInputComponent } from './core/first-custom-input/first-custom-input.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { GenericInputComponent } from './core/generic-input/generic-input.component';
import { AddressFormComponent } from './core/address-form/address-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordInputComponent } from './core/password-input/password-input.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCustomInputComponent,
    SigninFormComponent,
    GenericInputComponent,
    AddressFormComponent,
    PasswordInputComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
