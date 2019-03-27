import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),NgxErrorsModule
  ],
})
export class RegisterPageModule {
  loginForm: FormGroup;
	loginError: string;
}
