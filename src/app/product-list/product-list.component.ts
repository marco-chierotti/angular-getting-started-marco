import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products : Observable<Product>;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getItems();
  }

  share() {
    window.alert('The product has been shared!');
  }

  // notify handler for the event from the product alert component
  onNotify(event) {
    window.alert('You will be notified when the "' + event.name + '" product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/