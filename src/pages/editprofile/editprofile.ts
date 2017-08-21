import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EditprofilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {

	editprofile:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.editprofile ={
      img: 'assets/img/profile-img.png', name: 'John Doe', address:'Sydney Australia', rate:'4.5', rent_nuber: '10', owner_number: '20'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePagePage');
  }

}
