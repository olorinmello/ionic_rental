import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Calendar } from '@ionic-native/calendar';
import { FormGroup, FormControl } from '@angular/forms';

import { MapPage } from '../map/map';
import { MapModal } from '../modal-page/modal-page';
import { SearchresultPage } from '../searchresult/searchresult';


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
	map=MapModal;
  searchresult=SearchresultPage;
	datePeriod:any;
  langs:any;
  langForm:any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  	this.categorylist =
  	[
  		{title: 'category A', icon:'md-color-filter', number:'20'},
			{title: 'category b', icon:'md-color-palette', number:'30'},
			{title: 'category c', icon:'md-compass', number:'40'},
  		{title: 'category D', icon:'md-contrast', number:'40'}
  	]

    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPagePage');
  }

  presentModal() {
    let modal = this.modalCtrl.create(MapModal);
    modal.present();
  }

  fromprice(){

  }

  toprice(){

  }

  doSubmit(){

  }
}
