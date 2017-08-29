import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


import { Login } from '../login/login';
import { Register } from '../register/register';


@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

	login=Login;
	register=Register;
	phonenumber:any;
  countrycode: any=61;
  number:number;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPagePage');
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

  }

  async dolanding(){
  	console.log("rascal countrycode" + this.countrycode);
    this.phonenumber=this.countrycode + this.number;
    console.log("rascal phonenumber" + this.phonenumber);

    const appVerifier = this.recaptchaVerifier;
    console.log("rascal appVerifier " + appVerifier);
    const phoneNumberString = "+" + this.phonenumber;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( confirmationResult => {

        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = this.alertCtrl.create({
        title: 'Enter the Confirmation code',
        inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
        buttons: [
          { text: 'Cancel',
            handler: data => { console.log('Cancel clicked'); }
          },
          { text: 'Send',
            handler: data => {
              //this.navCtrl.setRoot(Login);
              confirmationResult.confirm(data.confirmationCode)
                .then(function (result) {
                  // User signed in successfully.
                  console.log(result.user);
                  console.log("rascal successfully");
                  this.navCtrl.setRoot(Login);
                  // ...
                }).catch(function (error) {
                  console.log("rascal failed");
                  // User couldn't sign in (bad verification code?)
                  // ...
                });
            }
          }
        ]
      });
      prompt.present();
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });
		
  }
 /* dolanding(){
		this.navCtrl.setRoot(Register);
	}*/
}
