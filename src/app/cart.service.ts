import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ShippingInfo } from './shipping-info';
import { Observable } from 'rxjs';

@Injectable(
  /* NOTE: we do not need to get a root level injector because we register with the root ngModule
  {
    providedIn : 'root'
  }
  */
)
export class CartService {

  items = [];
  
  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
      this.items = [];
      return this.items;
  }

  getShippingPrices(): Observable<ShippingInfo> {
    return this.http.get<ShippingInfo>('assets/shipping.json');
  }
}