import { SignupPage } from './../signup/signup';
import { AuthserviceProvider } from './../../providers/authservice/authservice';
import { Observable } from 'rxjs/Rx';
import { Item } from './../home/home';
import { SecondpagePage } from './../secondpage/secondpage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook ,FacebookLoginResponse} from '@ionic-native/facebook';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


//import { AngularFireAuth } from 'angularfire2/auth';
//import { auth } from 'firebase';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  loginForm: FormGroup;
	loginError: string;
// displayName;
// Items: Observable<any[]>;
   constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private Facebook:Facebook,private Platform:Platform,private auth:AuthserviceProvider,
		private fb: FormBuilder){
      this.loginForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });//public afAuth: AngularFireAuth) {
  //   afAuth.authState.subscribe((user : firebase.User) => {
  //     if(!user) {
  //       this.displayName =null;
  //       return;
  //     }
  //     this.displayName =user.displayName;
  //   });
  // }
// signInWithFacebook(){
//   if (this.Platform.is('cordova')) {
//     return this.Facebook.login(['email', 'public_profile']).then(res => {
//       const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
//       return firebase.auth().signInWithCredential(facebookCredential);
//     })
//   }
//   else {
//     return this.afAuth.auth
//       .signInWithPopup(new firebase.auth.FacebookAuthProvider())
//       .then(res => console.log(res));
//   }
// }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad RegisterPage');
//   }
//   mj(){
//   this.navCtrl.push(SecondpagePage);
//   }
  
//  // login() {
//  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
//  // }
//  // logout() {
//  //   this.afAuth.auth.signOut();
// //
   }
   
    login() {
      let data = this.loginForm.value;
  
      if (!data.email) {
        return;
      }
  
      let credentials = {
        email: data.email,
        password: data.password
      };
      this.auth.signInWithEmail(credentials)
        .then(
          () => this.navCtrl.setRoot(SecondpagePage),
          error => this.loginError = error.message
        );
    }

     signup(){
    this.navCtrl.push(SignupPage);
     }
  
    loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(
        () => this.navCtrl.setRoot(SecondpagePage),
        error => console.log(error.message)
      );
    }
   }
  

