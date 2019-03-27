import { SignupPage } from './../pages/signup/signup';
import { AuthserviceProvider } from './../providers/authservice/authservice';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
import { environment } from './environment/environment';
import { SlideshowPage } from './../pages/slideshow/slideshow';
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { LoginpageNoModulePage } from './../pages/loginpage-no-module/loginpage-no-module';
import { InfoPage } from './../pages/info/info';
import { SecondpagePageModule } from './../pages/secondpage/secondpage.module';
import { RegisterPage } from './../pages/register/register';
import { ConsultantroomPage } from './../pages/consultantroom/consultantroom';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { AngularFireModule } from 'angularfire2';
 import { AngularFireAuthModule } from 'angularfire2/auth';
 import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {SecondpagePage} from '../pages/secondpage/secondpage';
import { DialogflowProvider } from '../providers/dialogflow/dialogflow';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultantroomPage,
    RegisterPage,
    SecondpagePage,
    InfoPage,
    LoginpageNoModulePage,
    SlideshowPage,
    SignupPage,
    
    // AngularFireModule,
    //AngularFireAuth
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    NgxErrorsModule,
    HttpClientModule
    
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultantroomPage,
    RegisterPage,
    SecondpagePage,
    InfoPage,
    LoginpageNoModulePage,
    SlideshowPage,
    SignupPage
    // AngularFireModule,
   // AngularFireAuthModule
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DialogflowProvider , 
    AngularFireDatabase,
    Facebook,AuthserviceProvider

  ]
})
export class AppModule {}
