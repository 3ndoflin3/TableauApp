import { Component } from '@angular/core';
import { cards } from '../app-routing.module';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cards: Array<any>;
  
  constructor() {
    this.cards = cards;
    console.debug('TabsPage constructor %o', this.cards);
  }

}
