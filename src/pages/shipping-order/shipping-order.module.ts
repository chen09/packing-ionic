import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {ShippingOrderPage} from "./shipping-order";


@NgModule({
  declarations: [
    ShippingOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ShippingOrderPage),
    TranslateModule.forChild()
  ],
  exports: [
    ShippingOrderPage
  ]
})
export class ShippingOrderPageModule { }
