import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { RegisterPage } from './../register/register';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Component, KeyValueChanges } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsultantroomPage } from '../consultantroom/consultantroom';
export interface Item { fullName:string;
  Age;
  Height;
  Temperature;
  Submit;
  gender;
  name;
  StartDate;  }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 

})
export class HomePage {
fullName;
Age;
Height;
Temperature;
Submit;
gender;
name;
StartDate;
item : Observable<any[]>
itemRef:AngularFireList<any>;
  constructor(public navCtrl: NavController,public db : AngularFireDatabase) {
    this.itemRef=db.list('/item/');
 this.item=this.itemRef.valueChanges();

  }


gf(){
  this.fullName="";
  this.Age="";
  this.Height="";
  this.Temperature="";
  
  this.gender="";
  
  this.StartDate="";
}
cg(){
   this.navCtrl.push(ConsultantroomPage);
 }
 mg(){
  this.navCtrl.push(RegisterPage);
 }
 
save(newname:string,newAge:number,newHeight:number,newTemperature:number,newStartDate:number,newGender:string)
{
this.itemRef.push({name:newname, Age : newAge, Height :newHeight ,Temperature :newTemperature, StartDate:newStartDate,Gender:newGender});

} 

 }
