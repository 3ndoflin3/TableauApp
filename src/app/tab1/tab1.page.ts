import { Component } from '@angular/core';
import { cards } from '../app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cards: Array<any>;
  selectedCard: any;
  constructor(private iab: InAppBrowser, public platform: Platform) {
    this.cards = cards;
    console.debug('TabsPage constructor %o', this.cards);
    console.debug('Platform %o', platform.platforms);
    
    this.platform.ready().then(() => {
      if(platform.is('desktop')){
        console.debug('Es desktop');
      }
      if(platform.is('ios')){
        console.debug('Es ios');
      }
      if(platform.is('cordova')){
        console.debug('Es cordova');
      }
      if(platform.is('mobile')){
        console.debug('Es movil');
      }
      if(platform.is('android')){
        console.debug('Es android');
      }
    });

    
  }

  seleccionarElemento(c){
    this.selectedCard = c;
  }

  openBlank(){
    this.iab.create(this.selectedCard.webViewUri, `_blank`, {location:'no'});
  }

  openSystem(){
    this.iab.create(this.selectedCard.webViewUri, `_self`, {location:'no'});
  }


}
