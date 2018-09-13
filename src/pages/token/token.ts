import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {ShippingOrderPage} from "../shipping-order/shipping-order";

@IonicPage()
@Component({
  selector: 'page-token',
  templateUrl: 'token.html'
})
export class TokenPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  token;

  constructor(public navCtrl: NavController) {
  }

  // Attempt to login in through our User service
  enter() {
    this.navCtrl.push("ShippingOrderPage");
  }
}
