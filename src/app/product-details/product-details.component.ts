import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private product: Product;
  private productId : string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId'); 

      // select the specific product from the list
      this.productService.getItems().pipe(first())
      .subscribe(val => {
        //let myJSON2 : string = JSON.stringify(val);
        //console.log("val " + myJSON2);
        this.product = val.find( v => v.productId == this.productId)});

    });
  }

  private addToCart(product){
    this.cartService.addToCart(product);
    window.alert(`Your product ${product.name} has been added to the cart!`);
  }
}