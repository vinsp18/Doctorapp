import { DialogflowProvider } from './../../providers/dialogflow/dialogflow';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { Keyboard } from '@ionic-native/keyboard';
/**
 * Generated class for the ConsultantroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultantroom',
  templateUrl: 'consultantroom.html',
})
export class ConsultantroomPage {
  message:any;
  response:any;
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public dialogflowProvider :DialogflowProvider) {
  
  

  }
  public sendMessage(): void {
    
    this.dialogflowProvider.getResponse(this.message).subscribe(res => {
      this.response=res.result.fulfillment.speech;
    
      this.message="";
      
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultantroomPage');
  }


}
