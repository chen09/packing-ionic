import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {TokenPage} from "./token";


@NgModule({
  declarations: [
    TokenPage,
  ],
  imports: [
    IonicPageModule.forChild(TokenPage),
    TranslateModule.forChild()
  ],
  exports: [
    TokenPage
  ]
})
export class TokenPageModule { }
