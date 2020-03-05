import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfotabPageRoutingModule } from './infotab-routing.module';

import { InfotabPage } from './infotab.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfotabPageRoutingModule
  ],
  declarations: [InfotabPage]
})
export class InfotabPageModule {}
