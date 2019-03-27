import { RegisterPage } from './../register/register';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the SlideshowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slideshow',
  templateUrl: 'slideshow.html',
})
export class SlideshowPage {
  @ViewChild(Slides) slides: Slides;
  autoplay:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==3){
      this.slides.stopAutoplay();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideshowPage');
  }
goto(){
  this.navCtrl.push(RegisterPage);
}

}
