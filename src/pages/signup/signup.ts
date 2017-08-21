import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FinishsignPage } from '../finishsign/finishsign';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

	finishsign=FinishsignPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPagePage');
  }

}
