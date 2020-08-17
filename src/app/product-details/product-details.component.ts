import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

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
      this.product = this.productService.getItem(this.productId);
    });
  }

  private addToCart(product){
    this.cartService.addToCart(product);
    window.alert(`Your product ${product.name} has been added to the cart!`);
  }
}