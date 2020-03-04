import { Component, OnInit } from '@angular/core';
import { cards } from '../app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{ 

  ngOnInit(): void {
    
  }

  cards: Array<any>;
  selectedCard: any;
  constructor(private iab: InAppBrowser, public platform: Platform) {
    this.cards = cards;
    console.debug('TabsPage constructor %o', this.cards);
    console.debug('Platform %o', platform.platforms);    

    if(this.platform.is('desktop')){
      console.debug('Es desktop');
    }
    if(this.platform.is('ios')){
      console.debug('Es ios');
    }
    if(this.platform.is('cordova')){
      console.debug('Es cordova');
    }
    if(this.platform.is('mobile')){
      console.debug('Es movil');
    }
    if(this.platform.is('android')){
      console.debug('Es android');
    }
  }

  seleccionarElemento(c){
    this.selectedCard = c;
  }

  openBlank(){
    
    this.platform.ready().then(() => {
      if(this.platform.is('desktop')){
        console.debug('Es desktop');
        /* let browser = new InAppBrowser('https://ionic.io', '_system');
        browser.on("loadstop").subscribe(()=> console.log("loadstop"));
        this.iab.create(this.selectedCard.webViewUri, `_blank`, {location:'no'});
 */
      }
      if(this.platform.is('ios')){
        console.debug('Es ios');
      }
      if(this.platform.is('cordova')){
        console.debug('Es cordova');
      }
      if(this.platform.is('mobile')){
        console.debug('Es movil');
      }
      if(this.platform.is('android')){
        console.debug('Es android');
        this.iab.create(this.selectedCard.webViewUri, `_blank`, {location:'no'});

      }
    });
  }

  openSystem(){
    this.platform.ready().then(() => {
      if(this.platform.is('desktop')){
        console.debug('Es desktop');
        this.iab.create(this.selectedCard.webViewUri, `_self`, {location:'no'});

      }
      if(this.platform.is('ios')){
        console.debug('Es ios');
      }
      if(this.platform.is('cordova')){
        console.debug('Es cordova');
      }
      if(this.platform.is('mobile')){
        console.debug('Es movil');
      }
      if(this.platform.is('android')){
        console.debug('Es android');
        this.iab.create(this.selectedCard.webViewUri, `_self`, {toolbar:'yes'});

      }
    });
    
  }


}
