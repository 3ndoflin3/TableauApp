import { Component, OnDestroy, OnInit } from '@angular/core';
import { cards } from '../app-routing.module';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy{
  urls: Array<any>;
  
  constructor() {
    /*********************************************************************************************************************************************************/
    //Add listeners and urls to the Browser so it can make a better performance 
    Browser.addListener('browserPageLoaded', () => {
      console.debug('Browser page loaded event called ');
      
    });
    Browser.addListener('browserFinished', () => {
      console.debug('Browser finished event called ');
      
    });
    
    Browser.prefetch({
      urls: ['https://tableau.discomap.eea.europa.eu/views/UrbanAdaptationMapViewer_fc_phone_test/mainpage?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link']
    });
    Browser.open({toolbarColor: "#f4dc41", url: 
    'https://tableau.discomap.eea.europa.eu/views/UrbanAdaptationMapViewer_fc_phone_test/mainpage?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link'})

    
    /*********************************************************************************************************************************************************/
    
    
  }
  
  ngOnInit(): void {
    this.urls = cards.map(el => { return el.webViewUri});
  }

  ngOnDestroy(): void {
    
  }
  
  
  

}

