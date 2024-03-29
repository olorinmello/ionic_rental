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

  public showwhite = false;

  expanded: Boolean;
  grid: Array<any>;
  neargrid: Array<any>;
  categorygrid: Array<any>;
  categorylist:Array<any>;
  like: any;

  hexColor: string = '#8d8d9b';

  profile=Profile;
  search=SearchPage;
  list = List;
  details=Details;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.expanded = true;

    this.grid = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
    this.categorylist = [
      {active_img: 'assets/icon/cat-nearyou.png', title: 'Nearby', inactive_img: 'assets/icon/cat-nearyou-grey.png', value:'nearby'},
      {active_img: 'assets/icon/cat-electronics.png', title: 'Electronics', inactive_img: 'assets/icon/cat-electronics-grey.png', value:'electronics'},
      {active_img: 'assets/icon/cat-cars.png', title: 'Cars and motors', inactive_img: 'assets/icon/cat-cars-grey.png', value:'cars'},
      {active_img: 'assets/icon/cat-sports.png', title: 'Sports, Leisure and games', inactive_img: 'assets/icon/cat-sports-grey.png', value:'sports'},
      {active_img: 'assets/icon/cat-home.png', title: 'Home and garden', inactive_img: 'assets/icon/cat-home-grey.png', value:'home'},
      {active_img: 'assets/icon/cat-movies.png', title: 'Movies, books and music', inactive_img: 'assets/icon/cat-movies-grey.png', value:'movies'},
      {active_img: 'assets/icon/cat-fashion.png', title: 'Fashion and accessories', inactive_img: 'assets/icon/cat-fashion-grey.png', value:'fashion'},
      {active_img: 'assets/icon/cat-baby.png', title: 'Baby and child', inactive_img: 'assets/icon/cat-baby-grey.png', value:'baby'},
      {active_img: 'assets/icon/cat-tools.png', title: 'Tools and machines', inactive_img: 'assets/icon/cat-tools-grey.png', value:'tools'},
      {active_img: 'assets/icon/cat-party.png', title: 'Party and Events', inactive_img: 'assets/icon/cat-party-grey.png', value:'party'},
      {active_img: 'assets/icon/cat-other.png', title: 'Other', inactive_img: 'assets/icon/cat-other-grey.png', value:'other'},
    ]
    this.neargrid = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset'}]
    this.categorygrid = [{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home-outline', price:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie-outline',price:'12', favourity:'11'}, {img: 'assets/img/03.png', title: 'shop', icon: 'ios-shirt-outline',price:'12', favourity:'34'}, {img: 'assets/img/04.png', title: 'rent', icon: 'ios-headset-outline', price:'32', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',price:'31', favourity:'15'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',price:'34', favourity:'65'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',price:'42', favourity:'23'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',price:'20', favourity:'21'},{img: 'assets/img/01.png', title: 'apartment', icon: 'ios-home',price:'20', favourity:'21'}, {img: 'assets/img/02.png', title: 'wedding hall', icon: 'ios-bowtie',price:'20', favourity:'21'}, {img: 'assets/img/03.png', title: 'shop', icon: 'md-cart',price:'20', favourity:'21'}, {img: 'assets/img/04.png', title: 'rent', icon: 'md-headset',price:'20', favourity:'21'}]
  }

  showheart() {
    this.showwhite = !this.showwhite;
  }

  presentModal() {
    let modal = this.modalCtrl.create(MapModal);
    modal.present();
  }

  ActiveLike(){
    this.like = !this.like;
  }

  changecolor(){
    if(this.hexColor === '#ffffff') {
      this.hexColor = '#8d8d9b'
    } else {
      this.hexColor = '#ffffff'
    }
  }

  filterItems(){
    
  }

  myFunction(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var parent = event.srcElement.parentElement;
    var preparent = parent.parentElement;
    console.log(preparent);
    var children = preparent.children;
    var count = children.length;
    console.log(count);
    for (var i = 0; i < count; ++i) {
      if(parent==children[i]){
        var image=this.categorylist[i].active_img;
        console.log(i);
        console.log(children[i].getElementsByTagName('img')[0].getAttribute("data-inactive"));
        children[i].getElementsByTagName('img')[0].setAttribute("src", image);
      }
      else{
        var inactiveimage=this.categorylist[i].inactive_img;
        children[i].getElementsByTagName('img')[0].setAttribute("src", inactiveimage);
      }
    }
  }

}
