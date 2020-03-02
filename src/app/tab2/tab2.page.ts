import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  
  constructor(private iab: InAppBrowser) {
    const browser = this.iab.create('https://ionicframework.com/');
    
  }



browser.executeScript();

browser.insertCSS( );
browser.on('loadstop').subscribe(event => {
   browser.insertCSS({ code: "body{color: red;" });
});

browser.close();

}
