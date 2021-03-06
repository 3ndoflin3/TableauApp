import { Component, OnInit } from '@angular/core';
import { cards } from '../app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{ 

  cards: Array<any>;
  selectedCard: any;
  constructor(private iab: InAppBrowser, public platform: Platform) {
    this.cards = cards;  
  }

  seleccionarElemento(c){
    this.selectedCard = c;
  }

  openSystem(c){
    this.seleccionarElemento(c);
    this.platform.ready().then(() => {

      if(this.platform.is('ios')){
        console.debug('Es ios');
        this.iab.create(this.selectedCard.webViewUri, `_blank`, {toolbar:'yes', hideurlbar: 'yes', useuiwebview: 'yes'});
      }

      if(this.platform.is('android')){
        console.debug('Es android');
        this.iab.create(this.selectedCard.webViewUri, `_self`, {toolbar:'yes', hideurlbar: 'yes'});

      }
    });
    
  }


}
