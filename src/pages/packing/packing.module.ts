import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import {PackingPage} from "./packing";

@NgModule({
  declarations: [
    PackingPage,
  ],
  imports: [
    IonicPageModule.forChild(PackingPage),
    TranslateModule.forChild()
  ],
  exports: [
    PackingPage
  ]
})
export class PackingPageModule { }
