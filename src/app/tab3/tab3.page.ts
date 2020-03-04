import { Component, OnInit, OnDestroy } from '@angular/core';
import {Plugins} from '@capacitor/core';
import { cards } from '../app-routing.module';
import { Platform } from '@ionic/angular';

const { Browser } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy{

  
  urls: Array<any>;
  cards: Array<any>;
  selectedCard: any;


  constructor(public platform: Platform) {
    
    console.debug('TabsPage constructor %o', this.cards);
    console.debug('Platform %o', platform.platforms);    

    /*********************************************************************************************************************************************************/
    //Add listeners and urls to the Browser so it can make a better performance 
    Browser.addListener('browserPageLoaded', () => {
      console.debug('Browser page loaded event called ');
      
    });
    Browser.addListener('browserFinished', () => {
      console.debug('Browser finished event called ');

    });

    Browser.prefetch({
      urls: this.urls
    });

    /*********************************************************************************************************************************************************/
    //Check the platform of the device
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

  }//END OF CONSTRUCTOR


  /*********************************************************************************************************************************************************/

  ngOnInit() {
    this.cards = cards;
    this.urls = cards.map(el => { return el.webViewUri});
    console.debug('urls array %o', this.urls);
  }//END OF OnInit()
  
  /*********************************************************************************************************************************************************/

  ngOnDestroy(): void {
  throw new Error("Method not implemented.");
  }//END OF OnDestroy()

  /*********************************************************************************************************************************************************/

  seleccionarElemento(c){
    this.selectedCard = c;
  }//END OF seleccionarElemento


  /*********************************************************************************************************************************************************/

  async openBlank(){
    
    this.platform.ready().then(() => {
      if(this.platform.is('desktop')){
        console.debug('Es desktop');
        Browser.open({toolbarColor: "#f4dc41", url: this.selectedCard.webViewUri})

        /* let browser = new InAppBrowser('https://ionic.io', '_system');
        browser.on("loadstop").subscribe(()=> console.log("loadstop"));
        this.iab.create(this.selectedCard.webViewUri, `_blank`, {location:'no'});*/

      }
      if(this.platform.is('ios')){
        console.debug('Es ios');
        Browser.open({toolbarColor: "#f4dc41", url: this.selectedCard.webViewUri})

      }
      if(this.platform.is('cordova')){
        console.debug('Es cordova');
      }
      if(this.platform.is('mobile')){
        console.debug('Es movil');
      }
      if(this.platform.is('android')){
        console.debug('Es android');
        //this.iab.create(this.selectedCard.webViewUri, `_blank`, {location:'no'});
        Browser.open({toolbarColor: "#f4dc41", url: this.selectedCard.webViewUri})

      }
    });
  }//END OF openBlank()

  /*********************************************************************************************************************************************************/

  async openSystem(){
    console.debug('OpenSystem %o', this.cards[0].webViewUri);

    this.platform.ready().then(() => {
      if(this.platform.is('desktop')){
        console.debug('Es desktop');
        //this.iab.create(this.selectedCard.webViewUri, `_self`, {location:'no'});
      }
      if(this.platform.is('ios')){
        console.debug('Es ios');
        Browser.open({toolbarColor: "#f4dc41", url: this.cards[0].webViewUri});

      }
      if(this.platform.is('cordova')){
        console.debug('Es cordova');
      }
      if(this.platform.is('mobile')){
        console.debug('Es movil');
      }
      if(this.platform.is('android')){
        console.debug('Es android');
        //this.iab.create(this.selectedCard.webViewUri, `_self`, {toolbar:'yes'});
        Browser.open({toolbarColor: "#f4dc41", url: this.cards[0].webViewUri});
      }
    });
    
  }//END OF openSystem()

}//END OF CLASS
