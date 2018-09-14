import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import {Item} from '../../models/item';

@IonicPage()
@Component({
  selector: 'page-packing',
  templateUrl: 'packing.html'
})
export class PackingPage {

  private res;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.res = navParams.get('res');
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {

  }

  /**
   * Prompt the user to add a new item. This shows our ScanListPage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  scanList() {
    let modal = this.modalCtrl.create('ScanListPage', {
      content: this.res.Content
    });
    modal.present();
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
