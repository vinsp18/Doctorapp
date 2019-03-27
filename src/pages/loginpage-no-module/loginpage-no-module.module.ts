import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginpageNoModulePage } from './loginpage-no-module';

@NgModule({
  declarations: [
    LoginpageNoModulePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginpageNoModulePage),
  ],
})
export class LoginpageNoModulePageModule {}
