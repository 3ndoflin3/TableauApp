import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfotabPage } from './infotab.page';

const routes: Routes = [
  {
    path: '/info',
    component: InfotabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfotabPageRoutingModule {}
