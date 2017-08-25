import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Register } from '../register/register';


/*
  Generated class for the LandingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

	login=Login;
	register=Register;
	phonenumber:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPagePage');
  }

  dolanding(){
		if (this.phonenumber!='1234') {
			this.navCtrl.setRoot(Login);
		}
		else {
			this.navCtrl.setRoot(Register);
		}
  }
 /* dolanding(){
		this.navCtrl.setRoot(Register);
	}*/
}
