import { Component, OnDestroy } from '@angular/core';
import { cards } from '../app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnDestroy{
  
  
  cards: Array<any>;
  constructor(private iab: InAppBrowser) {
    this.cards = cards;
    this.iab.create(this.cards[0].webViewUri, `_self`, {location:'no'});
    
  }
      ngOnDestroy(): void {
        this.iab = null;
      }


  

}
