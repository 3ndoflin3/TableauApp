import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfotabPage } from './infotab/infotab.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./infotab/infotab.module').then(m => m.InfotabPageModule)
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
      webViewUri: 'https://tableau.discomap.eea.europa.eu/views/UrbanAdaptationMapViewer_fc_phone_test/mainpage?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link'
  }, {
      title: 'Option 2',
      imageUri: '../assets/StoriesViz.png',
      description: 'Option 2 - Description',
      webViewUri: 'https://tableau.discomap.eea.europa.eu/t/Natureonline/views/NS1_GeneralinformationonNatura2000/1_GeneralinformationontheNatura2000network?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  }, {
      title: 'Option 3',
      imageUri: '../assets/StoriesViz.png',
      description: 'Option 3 - Description',
      webViewUri: 'https://tableau.discomap.eea.europa.eu/t/Natureonline/views/Art17_NS5_Pressuresthreats/5a_Mainpressuresthreats_habitats?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  }, {
      title: 'Option 4',
      imageUri: '../assets/StoriesViz.png',
      description: 'Option 4 - Description',
      webViewUri: 'https://tableau.discomap.eea.europa.eu/t/Natureonline/views/Art17_NS6_Natura2000coverage/6aNatura2000coverageforhabitats?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link'
  }
];
