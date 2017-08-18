import { Component, OnInit, ElementRef,ViewChild , NgZone  } from '@angular/core';
import { NavController, ModalController, NavParams, Content, ViewController } from 'ionic-angular';
import { RentPage } from '../rent/rent';
import { MapModal } from '../modal-page/modal-page';
import { ShareModal } from '../share-modal/share-modal';

import { Geolocation} from 'ionic-native';

declare var google;

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild("contentRef") contentHandle: Content;

  showFooter= false;
  rentPage = RentPage;
  private topOrBottom: String;
  private contentBox;
  private tabBarHeight;
  like: any;
  Product: any;

  rent=RentPage;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public myElement: ElementRef, public modalCtrl: ModalController, public zone:NgZone, public viewCtrl: ViewController)  {
    this.Product ={
      img: 'assets/img/11.png', ownerimage:'assets/img/profile-img.png', ownername: 'John', item_title:'house', price:'25', description:'this is good rentalable book', selectdate:'', total_cost:'100'}

    this.ionViewLoaded();
  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){
    Geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }

  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  ngOnInit(){
    this.toggle_footer(false);
  }
  toggle_footer(show){
    if(show){
    document.querySelector(".detFooter")['style'].display = 'block';
    document.querySelector("page-details .scroll-content")['style'].marginBottom = '50px';
    document.querySelector("page-details .fixed-content")['style'].marginBottom = '50px';
    this.zone.run(()=>{
      this.showFooter = true;
    })

    }else{
      document.querySelector(".detFooter")['style'].display = 'none';
      document.querySelector("page-details .scroll-content")['style'].marginBottom = 0;
      document.querySelector("page-details .fixed-content")['style'].marginBottom = 0;
      this.zone.run(()=>{
      this.showFooter = false;
      })
    }
  }

  goto(){
    this.content.scrollToBottom(300);//300ms animation speed
  }

  detect_position(){
      if(this.content.scrollTop > document.querySelector('body').offsetHeight  -100) {
        return true;
      }
      else return false;
  }
  scrollingFun(e){
      if(e.scrollTop > this.contentHandle.getContentDimensions().contentHeight - 200){
      this.toggle_footer(true);
    } else{
        this.toggle_footer(false);
    }
  }

  presentModal() {
    let modal = this.modalCtrl.create(MapModal);
    modal.present();
  }

  presentShare() {
    let Share = this.modalCtrl.create(ShareModal);
    Share.present();
  }

  ActiveLike(){
    this.like = !this.like;
  }

}