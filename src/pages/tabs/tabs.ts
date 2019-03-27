import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html',
  
})
export class TabsPage {

  tab1Root = RegisterPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
