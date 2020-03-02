import { Component } from '@angular/core';
import { cards } from '../app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cards: Array<any>;
  
  constructor(private iab: InAppBrowser) {
    this.cards = cards;
    console.debug('TabsPage constructor %o', this.cards);
  }


  openBlank(){
    this.iab.create(this.cards[0].webViewUri, `_blank`);
  }

  openSystem(){
    this.iab.create(this.cards[0].webViewUri, `_system`);
  }


}
