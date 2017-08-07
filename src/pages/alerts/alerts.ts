import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { AlertdetailPage } from '../alertdetail/alertdetail';

/*
  Generated class for the AlertsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {

	list: Array<any>;
	alertdetail=AlertdetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.list =
  	[
  		{title: 'John', history:'last 24hr', price:'20-30', range: '10 km', duration: 'July 1 - July 10'},
			{title: 'name 2', history:'last 2day', price:'40-50', range: '20 km', duration: 'July 12 - July 15'},
			{title: 'name 3', history:'last 24hr', price:'20-30', range: '30 km', duration: 'July 16 - July 20'},
  	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPagePage');
  }

}
