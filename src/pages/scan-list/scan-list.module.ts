import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ScanListPage } from './scan-list';

@NgModule({
  declarations: [
    ScanListPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanListPage),
    TranslateModule.forChild()
  ],
  exports: [
    ScanListPage
  ]
})
export class ItemCreatePageModule { }
