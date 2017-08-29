import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';

/*import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';*/
import { allPages } from '../pages/common/declerations';

/*import { TabsPage } from '../pages/tabs/tabs';
*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const firebaseConfig = {
  apiKey: "AIzaSyDEee2UBVTNqMDLVqhtMeCBSmFb-VGLKKI",
  authDomain: "firechat-65d7f.firebaseapp.com",
  databaseURL: "https://firechat-65d7f.firebaseio.com",
  projectId: "firechat-65d7f",
  storageBucket: "firechat-65d7f.appspot.com",
  messagingSenderId: "342748824361"
};

var APP_Pages = [];
  for(let i in allPages){
    APP_Pages.push(allPages[i]);
  }


@NgModule({
  declarations: [
    MyApp,
    APP_Pages
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     APP_Pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
