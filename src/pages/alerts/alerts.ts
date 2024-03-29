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
  alertlist:Array<any>;
  alert_opportunity:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.list =
  	[
  		{alertname: 'John', history:'24', startprice:'20',lastprice:'30', distance: '10', startduration: 'July 1', lastduration:'July 10'},
			{alertname: 'name 2', history:'2', startprice:'40',lastprice:'50', distance: '20', startduration: 'July 6', lastduration:'July 14'},
			{alertname: 'name 3', history:'24',startprice:'24',lastprice:'32', distance: '30', startduration: 'July 14', lastduration:'July 23'},
  	]
    this.alert_opportunity="alert";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPagePage');
  }

}
