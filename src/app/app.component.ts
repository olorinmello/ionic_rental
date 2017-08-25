import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController , NavController, NavParams} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Likes } from '../pages/likes/likes';
import { Profile } from '../pages/profile/profile';
import { Setting } from '../pages/setting/setting';
import { Myrent } from '../pages/myrent/myrent';
import { Details } from '../pages/details/details';

import { LandingPage } from '../pages/landing/landing';
import { PaymentsPage } from '../pages/payments/payments';
import { TcPage } from '../pages/tc/tc';
import { ContactPage } from '../pages/contact/contact';
import { TabPage } from '../pages/tab/tab';


export interface PageInterface {
  title: string;
  name:string;
  icon: string;
  index?: number;
  tabName?: string;
  component: any;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})

/*export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LandingPage;
  pages: Array<any>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home, icon: 'md-home' },
      { title: 'Likes', component: Likes, icon:'md-heart'},
      { title: 'Profile', component: Profile, icon:'md-person'},
      { title: 'My Rent', component: Myrent, icon:'ios-archive'},
      { title: 'Setting', component: Setting, icon:'md-settings'},
      { title: 'About', component: About, icon:'md-help-circle'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

 logout() {
    this.nav.setRoot(Login);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}*/

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = LandingPage;

  pages: PageInterface[] = [
    { title: 'Home',  name:'Home', component: Home, index: 0, icon: 'home' },
    { title: 'Profile', name:'Profile',component: Profile,   icon: 'home' },
    { title: 'Payments', name:'Payments',component: Profile,  icon: 'home' },
    { title: 'About', name:'About',component: About,  icon: 'home' },
    { title: 'T&C',name:'Home',component: TcPage, icon: 'home' },
    { title: 'Contact US', name:'Home',component: ContactPage,   icon: 'home' }
  ];


  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

 logout() {
    this.nav.setRoot(Login);
  }

  openPage(page:PageInterface) {
    let params= {};

    if (page.index) {
      params = {tabIndex:page.index};
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    }
    else{
      console.log(`Didn't set nav `);
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }
}