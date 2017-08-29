import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { List } from '../list/list';
import { MapModal } from '../modal-page/modal-page';

import { Profile } from '../profile/profile';
import { SearchPage } from '../search/search';
import { Details } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  expanded: Boolean;
  grid: Array<any>;
  neargrid: Array<any>;
  categorygrid: Array<any>;
  categorylist:Array<any>;

  profile=Profile;
  search=SearchPage;
  list = List;
  details=Details;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.expanded = true;

    this.grid = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
    this.categorylist = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
    this.neargrid = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
    this.categorygrid = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline', view:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline',view:'12', favourity:'11'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline',view:'12', favourity:'34'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', view:'32', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',view:'31', favourity:'15'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',view:'34', favourity:'65'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',view:'42', favourity:'23'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',view:'20', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',view:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',view:'20', favourity:'21'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',view:'20', favourity:'21'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',view:'20', favourity:'21'}]
  }

  presentModal() {
    let modal = this.modalCtrl.create(MapModal);
    modal.present();
  }

}
