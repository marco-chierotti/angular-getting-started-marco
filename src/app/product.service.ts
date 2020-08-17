import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from './product';
import { Observable } from 'rxjs';

import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private products : Array<Product>;

  constructor(private http: HttpClient) { 
  }

  public getItems() : Observable<Product>{
     return this.http.get<Product>('assets/products.json');
  }
}