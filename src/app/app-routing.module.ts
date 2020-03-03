import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const cards = [
  {
      title: 'Urban Audit',
      imageUri: '../assets/urban_audit.png',
      description: 'Urban Audit city factsheets for 2019 Urban Adaptation Map Viewer.',
      //webViewUri: 'https://developer.tableau.com',
      //webViewUri: 'https://public.tableau.com/profile/european.environment.agency#!/vizhome/test_20190116Urban_vulnerability_ideasFR_0/mainpage',
      webViewUri: 'https://tableau.discomap.eea.europa.eu/views/UrbanAdaptationMapViewer_fc_phone_test/mainpage?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link'
  }, {
      title: 'Option 2',
      imageUri: '../assets/StoriesViz.png',
      description: 'Option 2 - Description',
      //webViewUri: 'https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm',
      webViewUri: ''
  }, {
      title: 'Option 3',
      imageUri: '../assets/StoriesViz.png',
      description: 'Option 3 - Description',
      webViewUri: ''
  }, {
      title: 'Option 4',
      imageUri: '../assets/StoriesViz.png',
      description: 'Option 4 - Description',
      webViewUri: ''
  }
];
