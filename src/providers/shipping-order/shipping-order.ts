import 'rxjs/add/operator/toPromise';

import {Injectable} from '@angular/core';

import * as CryptoJS from 'crypto-js/crypto-js.js';

import {Api} from '../api/api';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class ShippingOrder {

  private _CLOUD_KEY = 'AmiAuth';
  private _SECRET = '00000000000000000000000000000001';
  private _DEFAULT_TOKEN = '972342023272170693';
  // private _DEFAULT_TOKEN = '911019305880819822';

  // 发货明细查询Api
  private ShippingOrderScanQuery = 'AmiWmsCenter/api/ShippingOrder/ShippingOrderScanQuery';
  // 箱确认
  private ShippingOrderCtnConfirm = 'AmiWmsCenter/api/ShippingOrder/ShippingOrderCtnConfirm';
  // 装箱扫描最终确
  private ShippingOrderConfirm = 'AmiWmsCenter/api/ShippingOrder/ShippingOrderConfirm';

  constructor(public api: Api) {
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  query(number: string) {

    const orig = `{"SHIPPINGORDERNUMBER":"${number}"}`;
    const sign = this.getSign(orig, this._SECRET);

    const body = {
      CloudKey: this._CLOUD_KEY,
      Token: this._DEFAULT_TOKEN,
      Sign: sign,
      PropListString: orig
    };

    console.log(body);

    let seq = this.api.post(this.ShippingOrderScanQuery, body).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {

      } else {

      }
    }, err => {
      console.error(err);
    });

    return seq;
  }

// {"CloudKey":"AmiAuth","Sign":"90A7B2C80C9EE4FDD505C73ABBA308C4","Token":"972342023272170693","PropListString":"{"SHIPPINGORDERNUMBER":"SC60000157"}"}

  getSign(str: string, secret: string): string {
    const key = CryptoJS.enc.Utf8.parse(secret);
    const actual = CryptoJS.AES.encrypt(str, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}).ciphertext;
    const actual2 = CryptoJS.enc.Base64.stringify(actual, 0);
    return CryptoJS.MD5(actual2).toString();
  }
}
