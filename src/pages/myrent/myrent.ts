import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-myrent',
  templateUrl: 'myrent.html'
})
export class Myrent {

  own_avaiablelist: Array<any>;
  own_rentedlist: Array<any>;
  rent_currentlist: Array<any>;
  rent_historylist: Array<any>;

  list:Array<any>;
  own_rent:string="own";
  date:string="current";
  isavailable:string="available";
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.list=[{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'},{img: 'assets/img/11.png', title: 'Stylish house'}, {img: 'assets/img/22.png', title: 'Big Houses'}, {img: 'assets/img/33.png', title: 'Big Houses'}, {img: 'assets/img/11.png', title: 'Stylish house'}]


    this.own_avaiablelist =
    [
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/22.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/33.png', title: 'John', view:'10', favourity:'20'},
      {img: 'assets/img/11.png', title: 'John', view:'10', favourity:'20'},
    ]

    this.own_rentedlist =
    [
      {img: 'assets/img/11.png', title: 'apartment', profileimage:'assets/img/profile-img.png', profilename:'John', delete:'yes', },
      {img: 'assets/img/22.png', title: 'wedding', profileimage:'assets/img/profile-img.png', profilename:'rascal', delete:'yes', },
      {img: 'assets/img/33.png', title: 'shop', profileimage:'assets/img/profile-img.png', profilename:'sizza', delete:'yes', }
    ]

    this.rent_currentlist =
    [
      {img: 'assets/img/11.png', title: 'apartment', profileimage:'assets/img/profile-img.png', profilename:'John', delete:'yes', },
      {img: 'assets/img/22.png', title: 'wedding', profileimage:'assets/img/profile-img.png', profilename:'rascal', delete:'yes', },
      {img: 'assets/img/33.png', title: 'shop', profileimage:'assets/img/profile-img.png', profilename:'sizza', delete:'yes', }
    ]

    this.rent_historylist =
    [
      {img: 'assets/img/11.png', title: 'apartment', profileimage:'assets/img/profile-img.png', profilename:'John', delete:'yes', },
      {img: 'assets/img/22.png', title: 'wedding', profileimage:'assets/img/profile-img.png', profilename:'rascal', delete:'yes', },
      {img: 'assets/img/33.png', title: 'shop', profileimage:'assets/img/profile-img.png', profilename:'sizza', delete:'yes', }
    ]
  }

  /*removeItem(item){
    for(var i = 0; i < this.list.length; i++) {
 
      if(this.list[i] == item){
        this.list.splice(i, 1);
      }
 
    }
  }*/

}
