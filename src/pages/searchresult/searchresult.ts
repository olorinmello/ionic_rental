import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Profile } from '../profile/profile';
import { SearchPage } from '../search/search';

/*
  Generated class for the SearchresultPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html'
})
export class SearchresultPage {

	profile=Profile;
	search=SearchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPagePage');
  }

}
