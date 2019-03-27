import { LoginpageNoModulePage } from './../loginpage-no-module/loginpage-no-module';
import { ConsultantroomPage } from './../consultantroom/consultantroom';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the SecondpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondpage',
  templateUrl: 'secondpage.html',
})
export class SecondpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondpagePage');
  }
gf(){
  this.navCtrl.push(HomePage);
}
mi(){
  this.navCtrl.push(ConsultantroomPage);
}
yf(){
  this.navCtrl.push(InfoPage);
}
ut(){
  this.navCtrl.push(LoginpageNoModulePage);
}
}
