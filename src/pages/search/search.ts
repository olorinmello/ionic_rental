import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';


/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	categorylist:Array<any>;
	map=MapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.categorylist =
  	[
  		{title: 'category A', icon:'md-color-filter', number:'20'},
			{title: 'category b', icon:'md-color-palette', number:'30'},
			{title: 'category c', icon:'md-compass', number:'40'},
  		{title: 'category D', icon:'md-contrast', number:'40'}

  	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPagePage');
  }

}
