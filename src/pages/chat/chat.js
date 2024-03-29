var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatdetailPage } from '../chatdetail/chatdetail';
/*
  Generated class for the ChatPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatdetails = ChatdetailPage;
        this.list =
            [
                { img: 'assets/img/11.png', title: 'John', item_title: 'house', history: '2 days ago' },
                { img: 'assets/img/22.png', title: 'sizza', item_title: 'apple', history: '3 days ago' },
                { img: 'assets/img/33.png', title: 'jonathan', item_title: 'nut', history: '4 days ago' },
                { img: 'assets/img/11.png', title: 'Josh', item_title: 'pear', history: '5 days ago' },
                { img: 'assets/img/11.png', title: 'Joseph', item_title: 'TV', history: '2 days ago' }
            ];
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPagePage');
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Component({
        selector: 'page-chat',
        templateUrl: 'chat.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.js.map