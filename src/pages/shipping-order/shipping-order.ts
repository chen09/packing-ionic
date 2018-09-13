import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ShippingOrder} from "../../providers/shipping-order/shipping-order";

@IonicPage()
@Component({
  selector: 'page-shipping-order',
  templateUrl: 'shipping-order.html'
})
export class ShippingOrderPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  private number: string = 'SC00122709';

  constructor(public navCtrl: NavController,
              public shippingOrder: ShippingOrder) {

  }

  // Attempt to login in through our User service
  query() {
    if (this.number != null && this.number != '') {
      this.shippingOrder.query(this.number).subscribe((resp) => {
        console.log(resp);
      }, (err) => {

      });
    }
  }

  clear() {
    this.number = null;
  }
}
